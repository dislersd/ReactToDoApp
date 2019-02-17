import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faXRay, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)
library.add(faTimes)

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
            <button className='add-btn' onClick={this.submitTask} type="submit">  <FontAwesomeIcon icon="plus" /> </button>
          </div>
        </div>

        <div className="form-btns">
        </div>
      </form>
    );
}
};

export default ToDoForm;



