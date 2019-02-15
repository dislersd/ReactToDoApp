import React from "react"

const ToDo = props => {
  return (
    <ul>
      <li 
      className={`toDoItem ${props.toDo.completed ? "complete" : null}`}
      onClick={() => props.toggle(props.toDo.id)}
      > {props.toDo.task} </li>
    </ul>

  );
}

export default ToDo;