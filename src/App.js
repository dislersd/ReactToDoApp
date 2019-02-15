import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css"

const toDoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoArray,
      task: "",
      id: Date.now(),
      completed: false,
      filter: []
    };
  }

  addToDo = (e, task) => {
    e.preventDefault();
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
  };
    this.setState({
      toDo: [...this.state.toDo, newToDo],
      task: ""
    });
  };

  toggle = itemId => {
    this.setState({
      toDo: this.state.toDo.map( item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    })
  }

  search = (e) => {
    this.setState({
      toDo: this.state.toDo.filter( item => item.task.includes(e.target.value))
    })
  }


  render() {
    return (
      <div className='app'>
      <header>
        <h1>To Do App</h1>
        <p>Click your task when complete</p>
      </header>
        <ToDoForm 
        value={this.state.task}  
        addToDo={this.addToDo}
        clearCompleted={this.clearCompleted}
        search={this.search}
        />
        <ToDoList 
        toDo={this.state.toDo} 
        toggle={this.toggle}  
        />


      </div>
    );
  }
}

export default App;



