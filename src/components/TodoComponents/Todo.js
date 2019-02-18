import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDo = props => {
  
    return (
      <div className="to-do-wrapper">
        <ul>
          <li
            className={`toDoItem ${props.toDo.completed ? "complete" : null}`}
            onClick={() => props.toggle(props.toDo.id)}
          >
            {props.toDo.task}
          </li>
        </ul>
        <button
          className="clear-btn"
          onClick={ () => props.delete(props.toDo.id)}
          type="submit"
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    );
  }

export default ToDo;
