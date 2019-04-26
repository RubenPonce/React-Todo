import React from "react";

const Todo = (props) => {
  
  return(  <li onClick={(e)=>props.markComplete(e,props.task)}>{props.task.task}</li> )
 
};

export default Todo;
