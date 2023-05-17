import React from "react";
import './App.css';

function FunComp() {
    return(
        <div className="box funBox">
            <h2>This is created  using functional Component</h2>
            <h4>This is done using external CSS</h4>
            <h4 style={{color:"blue"}}>This is done using inline CSS</h4>
        </div>
    )
}

export default FunComp;