import React from "react";

const Todo = (props) => {
    console.log(props);
    console.log(props.completed)
    console.log(props.clearClicked)
  return(  <li onClick={props.addStrikeThrough}>{props.task}</li> )
 
};

export default Todo;
