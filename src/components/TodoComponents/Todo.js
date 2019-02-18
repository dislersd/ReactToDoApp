import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.ToDo
    }
  }

  
  deleteTask = () => {
    this.setState({
      info: this.state.toDo.filter(task => !task.id)
    })
  }
  
  render() {
    console.log(this.state.info)
    return (
      <div className="to-do-wrapper">
        <ul>
          <li
            className={`toDoItem ${this.props.toDo.completed ? "complete" : null}`}
            onClick={() => this.props.toggle(this.props.toDo.id)}
          >
            {this.props.toDo.task}
          </li>
        </ul>
        <button
          className="clear-btn"
          // onClick={this.props.clearCompleted}
          onClick={this.deleteTask}
          type="submit"
        >
          {" "}
          <FontAwesomeIcon icon="times" />{" "}
        </button>
      </div>
    );
  }
}

export default ToDo;
