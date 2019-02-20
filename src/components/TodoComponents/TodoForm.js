import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);
library.add(faTimes);

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: this.props.toDo,
      filtered: [],
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTask = e => {
    this.setState({ task: "" });
    this.props.addToDo(e, this.state.task);
  };

  showHide = e => {
    if (e.target.value === "") {
      e.target.style.display = "none";
    } else {
      return e.target;
    }
  };

  searchHandler = e => {
    const todoItem = this.state.toDo.filter(item => {
      if (item.task.includes(e.target.value)) {
        return todoItem;
      }
    });
    this.setState({ filtered: todoItem });
  };

  render() {
    return (
      <form className="todo-form">
        <div className="form-inputs">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="search for task..."
            onChange={this.searchHandler}
          />
          <div className="input-and-add">
            <input
              className="task-input"
              type="text"
              autoComplete="off"
              value={this.state.task}
              onChange={this.handleChanges}
              name="task"
              placeholder="enter a to do..."
            />
            <button
              className={`add-btn ${this.state.task ? null : "hide"}`}
              onClick={this.submitTask}
              type="submit"
              value={this.state.task}
              onLoad={this.showHide}
            >
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </div>

        <div className="form-btns" />
      </form>
    );
  }
}

export default ToDoForm;
