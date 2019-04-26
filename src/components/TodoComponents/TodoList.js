// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";




const TodoList = (props) => { 
    console.log(props);
     
  return (
    <div className="list-items">
    {props.tasks.map(task =>{
        return (<Todo task={task.task} key={task.id} id={task.id} completed={task.completed} clearClicked={props.clearClicked} addStrikeThrough={props.addStrikeThrough}/>)
    })}
      
    </div>
  );
};
export default TodoList;
