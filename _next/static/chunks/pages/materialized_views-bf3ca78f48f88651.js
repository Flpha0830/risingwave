(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{6696:function(e,r,n){"use strict";n.d(r,{Td:function(){return x},Th:function(){return f},Tr:function(){return p},hr:function(){return h},iA:function(){return u},p3:function(){return m},xJ:function(){return d}});var t=n(7294),i=n(2067),c=n(4520),s=n(8387),a=(...e)=>e.filter(Boolean).join(" "),[l,o]=(0,s.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),u=(0,i.Gp)(((e,r)=>{const n=(0,i.jC)("Table",e),{className:s,...o}=(0,c.Lr)(e);return t.createElement(l,{value:n},t.createElement(i.m$.table,{role:"table",ref:r,__css:n.table,className:a("chakra-table",s),...o}))}));u.displayName="Table";var d=(0,i.Gp)(((e,r)=>{const{overflow:n,overflowX:c,className:s,...l}=e;return t.createElement(i.m$.div,{ref:r,className:a("chakra-table__container",s),...l,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:n??c??"auto",overflowY:"hidden",maxWidth:"100%"}})}));(0,i.Gp)(((e,r)=>{const{placement:n="bottom",...c}=e,s=o();return t.createElement(i.m$.caption,{...c,ref:r,__css:{...s.caption,captionSide:n}})})).displayName="TableCaption";var h=(0,i.Gp)(((e,r)=>{const n=o();return t.createElement(i.m$.thead,{...e,ref:r,__css:n.thead})})),m=(0,i.Gp)(((e,r)=>{const n=o();return t.createElement(i.m$.tbody,{...e,ref:r,__css:n.tbody})})),f=((0,i.Gp)(((e,r)=>{const n=o();return t.createElement(i.m$.tfoot,{...e,ref:r,__css:n.tfoot})})),(0,i.Gp)((({isNumeric:e,...r},n)=>{const c=o();return t.createElement(i.m$.th,{...r,ref:n,__css:c.th,"data-is-numeric":e})}))),p=(0,i.Gp)(((e,r)=>{const n=o();return t.createElement(i.m$.tr,{role:"row",...e,ref:r,__css:n.tr})})),x=(0,i.Gp)((({isNumeric:e,...r},n)=>{const c=o();return t.createElement(i.m$.td,{role:"gridcell",...r,ref:n,__css:c.td,"data-is-numeric":e})}))},2560:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/materialized_views",function(){return n(8928)}])},8704:function(e,r,n){"use strict";function t(e){var r,n,t;return"".concat(null===(r=e.columnDesc)||void 0===r?void 0:r.name," (").concat(null===(n=e.columnDesc)||void 0===n||null===(t=n.columnType)||void 0===t?void 0:t.typeName,")")}n.d(r,{Z:function(){return t}})},8928:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return v}});var t=n(7568),i=n(4051),c=n.n(i),s=n(5893),a=n(2141),l=n(639),o=n(6696),u=n(7741),d=n(9008),h=n.n(d),m=n(1664),f=n.n(m),p=n(7294),x=n(5330),_=n(8704),j=n(221);function v(){var e=(0,a.pm)(),r=(0,p.useState)([]),n=r[0],i=r[1];(0,p.useEffect)((function(){function r(){return(r=(0,t.Z)(c().mark((function r(){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.t0=i,r.next=4,(0,j.BA)();case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=12;break;case 8:r.prev=8,r.t2=r.catch(0),e({title:"Error Occurred",description:r.t2.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(r.t2);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){}}),[e]);var d=(0,s.jsxs)(l.xu,{p:3,children:[(0,s.jsx)(x.Z,{children:"Materialized Views"}),(0,s.jsx)(o.xJ,{children:(0,s.jsxs)(o.iA,{variant:"simple",size:"sm",maxWidth:"full",children:[(0,s.jsx)(o.hr,{children:(0,s.jsxs)(o.Tr,{children:[(0,s.jsx)(o.Th,{width:3,children:"Id"}),(0,s.jsx)(o.Th,{width:5,children:"Name"}),(0,s.jsx)(o.Th,{width:3,children:"Owner"}),(0,s.jsx)(o.Th,{width:1,children:"Metrics"}),(0,s.jsx)(o.Th,{width:1,children:"Depends"}),(0,s.jsx)(o.Th,{width:1,children:"Fragments"}),(0,s.jsx)(o.Th,{children:"Visible Columns"})]})}),(0,s.jsx)(o.p3,{children:n.filter((function(e){return!e.name.startsWith("__")})).map((function(e){return(0,s.jsxs)(o.Tr,{children:[(0,s.jsx)(o.Td,{children:e.id}),(0,s.jsx)(o.Td,{children:e.name}),(0,s.jsx)(o.Td,{children:e.owner}),(0,s.jsx)(o.Td,{children:(0,s.jsx)(u.zx,{size:"sm","aria-label":"view metrics",colorScheme:"teal",variant:"link",children:"M"})}),(0,s.jsx)(o.Td,{children:(0,s.jsx)(f(),{href:"/streaming_graph/?id=".concat(e.id),children:(0,s.jsx)(u.zx,{size:"sm","aria-label":"view metrics",colorScheme:"teal",variant:"link",children:"D"})})}),(0,s.jsx)(o.Td,{children:(0,s.jsx)(f(),{href:"/streaming_plan/?id=".concat(e.id),children:(0,s.jsx)(u.zx,{size:"sm","aria-label":"view metrics",colorScheme:"teal",variant:"link",children:"F"})})}),(0,s.jsx)(o.Td,{overflowWrap:"normal",children:e.columns.filter((function(e){return!e.isHidden})).map((function(e){return(0,_.Z)(e)})).join(", ")})]},e.id)}))})]})})]});return(0,s.jsxs)(p.Fragment,{children:[(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:"Materialized Views"})}),d]})}}},function(e){e.O(0,[474,282,774,888,179],(function(){return r=2560,e(e.s=r);var r}));var r=e.O();_N_E=r}]);