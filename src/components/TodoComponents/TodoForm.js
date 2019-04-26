import React from "react";

const TodoForm = (props) => {

  let date = Date.now();
  return (
    <form onSubmit={props.addTask}>
      <input required placeholder="...todo" onChange={(e)=>props.handleChange(e,date)} name="task" onSubmit={props.addTask}/>
      <div className="btn-container">
        <button >Add Todo</button>
        <button type="button"  onClick={()=>props.removeTask(props.tasks)} >Clear Completed</button>
      </div>
    </form>
  );
};
export default TodoForm;
