// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";




const TodoList = (props) => { 

  return (
    <div className="list-items">
    {
      props.tasks.map(task =>{
        return (<Todo task={task} markComplete={props.markComplete} key={Date.now()+Math.random()}/>)
    })}
    </div>
  );
};
export default TodoList;
