import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.addTask}>
      <input required placeholder="...todo" onChange={props.handleChange} name="task"/>
      <div className="btn-container">
        <button>Add Todo</button>
        <button type="button"  onClick={()=>props.removeTask(props.tasks)} >Clear Completed</button>
      </div>
    </form>
  );
};
export default TodoForm;
