import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FunComp from './FunComp';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      functionClick : false,
      classClick : false
    }
  }
  render(){
    return (
      <div className="App">
        <h3>Styling using Functional and Class Component</h3>
        <button onClick={()=>this.setState({functionClick: !this.state.functionClick})} className="funBtn">To see styling in Functional component</button>
        <button onClick={()=>this.setState({classClick: !this.state.classClick})} className="classBtn">To see styling in Functional component</button>

        {this.state.functionClick && <FunComp/>}
        {this.state.classClick && <ClassComp/>}
      
      </div>
    );
  }
}

export default App;
