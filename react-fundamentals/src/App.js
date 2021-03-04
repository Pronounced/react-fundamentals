import './App.css';
import React from "react";
import calc from "./calc.js"

const el = React.createElement;
class App extends React.Component {

  state = {
    input1: 0,
    input2: 0,
    result: ""
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
            result : calc.add([parseInt(this.state.input1), parseInt(this.state.input2)])
          }
        ) 
        break;

        case "sub":
          this.setState(
            {
              result : calc.subtract([parseInt(this.state.input1), parseInt(this.state.input2)])
            }
          ) 
          break;

          case "mult":
            this.setState(
              {
                result : calc.multiple([parseInt(this.state.input1), parseInt(this.state.input2)])
              }
            ) 
            break;

            case "div":
              this.setState(
                {
                  result : calc.divide([parseInt(this.state.input1), parseInt(this.state.input2)])
                }
              ) 
              break;  
      default:
        break;
    }
  }
  
  render(){
    return el('form', null,
    el('p', null, "input1 = " + this.state.input1 + " input2 = " + this.state.input2), 
    el('input', {name:"input1", onChange: this.updateState, type: "Number"}, null),
    el('input', {name:"input2", onChange: this.updateState, type: "Number"}, null),
    el('p', null, `Result = ${this.state.result}`),
    el('button', {name:"add", type:"button", onClick: this.doMath}, "+"),
    el('button', {name:"sub", type:"button", onClick: this.doMath}, "-"),
    el('button', {name:"mult", type:"button", onClick: this.doMath}, "*"),
    el('button', {name:"div", type:"button", onClick: this.doMath}, "/"),    
    )
  }
}

export default App;
