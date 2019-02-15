import React from "react";

class ToDoForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    task: ''
  }
}

handleChanges = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
};

submitTask = e => {
  this.setState({ task: ''});
  this.props.addToDo(e, this.state.task)
}

render() {
    return (
      <form className="todo-form">
        <div className="form-inputs">
          <input 
          type="text"
          name="search"
          autoComplete="off"
          placeholder="search for task"
          onChange={this.props.search}
          />
          <input
            className="task-input"
            type="text"
            autoComplete="off"
            value={this.state.task}
            onChange={this.handleChanges}
            name="task"
            placeholder="enter a to do..."
          />
        </div>

        <div className="form-btns">
          <button className='add-btn' onClick={this.submitTask} type="submit"> Add </button>
          <button className='clear-btn' onClick={this.props.clearCompleted} type="submit"> Clear </button>
        </div>
      </form>
    );
}
};

export default ToDoForm;



