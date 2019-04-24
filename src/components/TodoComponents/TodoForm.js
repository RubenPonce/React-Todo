import React from "react";

const TodoForm = (props) => {
    console.log(props);
    
  return (
    <form onSubmit={props.addTask}>
      <input placeholder="...todo" onChange={props.handleChange} name="task"/>
      <div className="btn-container">
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    </form>
  );
};
export default TodoForm;
