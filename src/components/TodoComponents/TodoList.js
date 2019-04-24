// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";




const TodoList = (props) => { 
    console.log(props);
     
  return (
    <div className="list-items">
    {props.tasks.map(task =>{
        return (<Todo task={task.task} id={task.id} removeTask={props.removeTask}/>)
    })}
      
    </div>
  );
};
export default TodoList;
