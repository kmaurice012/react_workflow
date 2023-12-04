import React from "react";
import ReactFlow from "reactflow"

import "reactflow/dist/style.css"   

const initialNodes = [
    {
        id: "1",
        type: "input",
        data: { label: "Mind Map" },
        position: { x: 0, y: 0 },
    }
]
export default function MindNode() {
    return (
        <div id="container">
        <ReactFlow nodes={initialNodes }></ReactFlow>
      </div>
    )
    
}