import React from "react";

const Todo = (props) => {
    console.log(props);
    console.log(props.completed)
    console.log(props.clearClicked)
  return( ((props.completed===false)) ? <li onClick={()=> props.addStrikeThrough(props.id)}>{props.task}</li> : null )
 
};

export default Todo;
