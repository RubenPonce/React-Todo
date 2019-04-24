import React from "react";

const Todo = (props) => {
    console.log(props);
    
  return <li onClick={props.removeTask}>{props.task}</li>;
};

export default Todo;
