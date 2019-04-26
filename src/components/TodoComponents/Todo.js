import React from "react";
import '../../components/TodoComponents/Todo.css'

const Todo = (props) => {
console.log(props)



  
  return(  <li onClick={(e)=>props.markComplete(e,props.task)} className={props.task.completed ? "strike" : null}>{props.task.task}</li> )
 
};

export default Todo;
