import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const toDoArray = [
  {
    task: 'Read a book',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Make Coffee',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      task: "",
      id: Date.now(),
      completed: false,
      filtered: []
    };
  }


  removeItem = itemId => {
    const newToDo = this.state.toDo.filter(item => item.id !== itemId);
    this.setState({ toDo: newToDo });
  };

  addToDo = (e, task) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }
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
      toDo: this.state.toDo.map(item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  // search = e => {
  //   this.setState({
  //     toDo: this.state.toDo.filter(item => item.task.includes(e.target.value))
  //   });
  // };


  render() {
    return (
      <div>
        <div className="app">
          <div className="app-content">
            <header>
              <h1>To Do App</h1>
            </header>
            <ToDoForm
              icon="coffee"
              value={this.state.task}
              addToDo={this.addToDo}
            />
            <ToDoList
              toDo={
              this.state.filtered.length > 0 ? this.state.filteredPosts : this.state.toDo
              }
              toggle={this.toggle}
              delete={this.removeItem}
            />

          </div>
        </div>
            <p className="under-app">
              A React demo by <a href="https://github.com/dislersd/ReactToDoApp" target="_blank">Dylan Dislers</a>
            </p>
      </div>
    );
  }
}

export default App;
