import { Component } from "react";
import './App.css';

class ClassComp extends Component{
    render(){
        return(
            <div className="box classBox">
            <h2>This is created  using Class Component</h2>
            <h4>This is done using external CSS</h4>
            <h4 style={{color:"blue"}}>This is done using inline CSS</h4>
            </div>
        ) 
    }
}

export default ClassComp;
