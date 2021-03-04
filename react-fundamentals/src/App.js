import './App.css';
import React from "react";
import calc from "./calc.js"

const el = React.createElement;
class App extends React.Component {

  state = {
    input1: 0,
    input2: 0,
    result: "",
    operator: ""
  }

  updateState = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  doMath = (event) =>{
    switch (event.target.name) {
      case "add":
        this.setState(
          {
            result : calc.add([parseInt(this.state.input1), parseInt(this.state.input2)]),
            operator: "+"
          }
        ) 
        break;

      case "sub":
        this.setState(
          {
            result : calc.subtract([parseInt(this.state.input1), parseInt(this.state.input2)]),
            operator: "-"
          }
        ) 
        break;

      case "mult":
        this.setState(
          {
            result : calc.multiple([parseInt(this.state.input1), parseInt(this.state.input2)]),
            operator: "*"
          }
        ) 
        break;

      case "div":
        this.setState(
          {
            result : calc.divide([parseInt(this.state.input1), parseInt(this.state.input2)]),
            operator: "/"
          }
        ) 
        break;  
      default:
        break;
    }
  }
  
  render(){
    return el('form', {class:"calc"},
    el('h1', null, "Calculator"), 
    el('input', {name:"input1", onChange: this.updateState, type: "Number"}, null),
    el('label', null, ` ${this.state.operator} `),
    el('input', {name:"input2", onChange: this.updateState, type: "Number"}, null),
    el('h2', null, `Result = ${this.state.result}`),
    el('button', {name:"add", type:"button", onClick: this.doMath}, "+"),
    el('button', {name:"sub", type:"button", onClick: this.doMath}, "-"),
    el('button', {name:"mult", type:"button", onClick: this.doMath}, "*"),
    el('button', {name:"div", type:"button", onClick: this.doMath}, "/"),    
    )
  }
}

export default App;
