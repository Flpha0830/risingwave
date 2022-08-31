/*
 * Copyright 2022 Singularity Data
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { useState } from "react";
import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import dagre from "dagre";
import Node from './Node.js';

import ReactFlow, {
    MiniMap,
    Controls,
    Background,
} from "react-flow-renderer";


const ContainerDiv = styled(Container)`
  font-family: sans-serif;
  text-align: left;
`;

const DemoArea = styled(Col)`
  width: 100%;
  height: 65vh;
`;

const position = {
    "x": 200,
    "y": 100,
}

const nodeTypes = { node: Node };

function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
                (25 + 70 * Math.random()) + '%,' + 
                (85 + 10 * Math.random()) + '%)'
}

function getStyle() {
    return {
        "background": getColor(),
        "height": 50,
        "width": 200,
        "border": "0.5px solid black",
        "padding": "5px",
        "border-radius": "5px",
    }
}

function layoutElements(nodeList, edgeList) {
    const g = new dagre.graphlib.Graph();
    g.setGraph({
        marginx: 20,
        marginy: 20
    });
    g.setDefaultEdgeLabel(function() {
        return {};
    });

    for (var i = 0; i < nodeList.length; i++) {
        g.setNode(nodeList[i]["id"], { width: 200, height: 100 });
    }

    for (var i = 0; i < edgeList.length; i++) {
        g.setEdge(edgeList[i]["target"], edgeList[i]["source"]);
    }

    dagre.layout(g);

    for (var i = 0; i < nodeList.length; i++) {
        const node = nodeList[i];
        node["position"] = {
            "x": g.node(node["id"]).x - 200 / 2,
            "y": g.node(node["id"]).y - 100 / 2
        };
    }
}

var visited = new Set();
var stageToNode = new Object();
var nodeStagePairs = [];

function parseSubElements(root, style, nodeList, edgeList) {
    if(root["children"].length == 0)
        return;
    
    for(var i = 0; i < root["children"].length; i++) {
        const child = root["children"][i];

        var edge = {
            "id": "e"+root["plan_node_id"]+"-"+child["plan_node_id"],
            "source": child["plan_node_id"],
            "target": root["plan_node_id"],
            "animated": true,
        }

        edgeList.push(edge);

        if(visited.has(child["plan_node_id"]))
            continue;

        var node = {
            "id": child["plan_node_id"],
            "data": {
                "label": "#"+child["plan_node_id"]+" "+child["plan_node_type"],
                "content": Object.values(child["schema"])
            },
            "position": position,
            "type": 'node',
            "style": style,
        }

        if(child["source_stage_id"] != null) {
            nodeStagePairs.push([child["plan_node_id"], child["source_stage_id"]]);
        }

        parseSubElements(child, style, nodeList, edgeList);

        nodeList.push(node);
    }
}

function parseElements(input) {
    var elements = [];
    var nodeList = [];
    var edgeList = [];

    var stages = input["stages"];

    for (const [key, value] of Object.entries(stages)) {
        const root = value["root"];
        stageToNode[key] = root["plan_node_id"];

        var style = getStyle();

        var node = {
            "id": root["plan_node_id"],
            "data": {
                "label": "#"+root["plan_node_id"]+" "+root["plan_node_type"],
                "content": Object.values(root["schema"])
            },
            "position": position,
            "type": 'node',
            "style": style
        }

        if(root["source_stage_id"] != null) {
            nodeStagePairs.push([root["plan_node_id"], root["source_stage_id"]]);
        }

        visited.add(node["id"]);

        parseSubElements(root, style, nodeList, edgeList);

        nodeList.push(node);
    }

    for(var i = 0; i < nodeStagePairs.length; i++) {
        var target = nodeStagePairs[i][0];
        var source = stageToNode[nodeStagePairs[i][1]];

        var edge = {
            "id": "e"+target+"-"+source,
            "source": source,
            "target": target,
            "animated": true,
        }

        edgeList.push(edge);
    }

    layoutElements(nodeList, edgeList);

    elements.push(...nodeList, ...edgeList);

    return elements;
}

export default function Explain() {
    const [input, setInput] = useState("");
    const [elements, setElements] = useState([]);

    const handleChange = (event) => {
      setInput(event.target.value);
    };

    const handleClick = (event) => {
        const jsonInput = JSON.parse(input);
        elements = parseElements(jsonInput);
        setElements(elements);
    };

  return (
    <ContainerDiv fluid>
        <p>Distributed Plan Explain</p>
        <textarea
            name="input json"
            type="text"
            placeholder="Explain"
            value={input} 
            onChange={handleChange}
            style={{width:'1000px', height:'100px'}}
        />
        <button 
            onClick={handleClick}
            style={{width:'100px', height:'100px', padding: '0px'}}
        ></button>
        <DemoArea>
          <ReactFlow
            elements={elements}
            nodeTypes={nodeTypes}
           >
            <MiniMap/>
            <Controls
                onZoomIn={() => console.log("zoom in pressed")}
            >
            </Controls>
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </DemoArea>
    </ContainerDiv>
  );
}
