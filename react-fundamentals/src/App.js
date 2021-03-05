import './App.css';
import React from "react";
import calc from "./calc.js";
import Button from "./component/button";
import Input from "./component/input";

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

  componentDidUpdate(){
    console.log("Test")
  }
  
  render(){
    return (
      <form className="calc">
        <h1>Calculator</h1>
        <Input name="input1" type="number" placeholder="input1" onChange={this.updateState}></Input>
        <label> {this.state.operator} </label>
        <Input name="input2" type="number" placeholder="input2" onChange={this.updateState}></Input>
        <h2> Result = {this.state.result}</h2>
        <Button name="add" type='button' onClick={this.doMath} text="+"></Button>
        <Button name="sub" type='button' onClick={this.doMath} text="-"></Button>
        <Button name="mult" type='button' onClick={this.doMath} text="*"></Button>
        <Button name="div" type='button' onClick={this.doMath} text="/"></Button>
      </form>
    );
  }
}

export default App;
