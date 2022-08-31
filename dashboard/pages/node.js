import { Handle, Position } from 'react-flow-renderer';
import Popup from "reactjs-popup";
import React from "react";
import loadable from '@loadable/component';
const ReactJson = loadable(() => import('react-json-view'));


const Card = ({ data }) => (
    <div className="card">
      <div className="content">
       <React.Fragment>
        <ReactJson 
            src={data.content} 
            name={false} 
            displayDataTypes={false}    
        />
       </React.Fragment>) 
      </div>
    </div>
);

const contentStyle = { background: '#FFFFFF'};

function Node({ data }) {
  return (
    <div className="text-updater-node">
      <Popup
        trigger={<p> {data.label} </p>}
        on="hover"
        {...{ contentStyle }}
      >
        <Card data={data} />
      </Popup>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

    </div>
  );
}

export default Node;