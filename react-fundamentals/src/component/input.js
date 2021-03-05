import React from 'react';

const Input = (props) => (
  <input name={props.name} type={props.type} onChange={props.onChange} placeholder={props.placeholder}></input>
);

export default Input;