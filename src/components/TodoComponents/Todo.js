import React from "react";

const Todo = (props) => {
  return(  <li onClick={props.addStrikeThrough}>{props.task}</li> )
 
};

export default Todo;
