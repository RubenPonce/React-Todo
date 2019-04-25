import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
const taskData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 152881708435812,
    completed: false
  },{
      task: 'Play League of Legends',
      id: 1528817084358231,
      completed: false
    }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasksOnState: taskData,
      task: '',
      id: '',
      completed: false, 
      fillTask:{
        task: '',
        id: Date.now(),
        completed: false
      },
    }
  }

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasksOnState: [...this.state.tasksOnState, this.state.fillTask],
    })
  };

  addStrikeThrough= id=>{
    console.log(id);
    // this.setState({
    //   completed: true
    // })
    this.setState({
      tasksOnState: this.state.tasksOnState.map(task=> {
        if(id===task.id){
          return {
            ...task,
            completed: !task.completed
          }
        }
        else{
         return task;
        }
      })
    
    })
    
  }
  removeTask = props =>{
    console.log(props.tasks)
   console.log('removed');
    
  }


  handleChange = e =>{
    console.log(e.target.value);
    this.setState({
      fillTask:{ 
        [e.target.name]: e.target.value
      }
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasksOnState} addStrikeThrough={this.addStrikeThrough} />
        <TodoForm addTask={this.addTask} handleChange={this.handleChange} removeTask={this.removeTask} tasks={this.state.tasksOnState}/>
      </div>
    );
  }
}

export default App;
