import React from 'react';

/* const OpButton = (props) => (
  <button name={props.name} type={props.type} onClick={props.onClick}>{props.text}</button>
);

export default OpButton; */


export default class Button extends React.Component{
  componentDidUpdate(){
    console.log(this.props.name, "did update")
  }
  render() {
    return <button name={this.props.name} type={this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
  }
}
