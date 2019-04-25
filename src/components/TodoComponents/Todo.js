import React from "react";

const Todo = (props) => {
    
    console.log(!props.completed)
  return( !props.completed ? <li onClick={()=> props.addStrikeThrough(props.id)}>{props.task}</li> : null )
 
};

export default Todo;
