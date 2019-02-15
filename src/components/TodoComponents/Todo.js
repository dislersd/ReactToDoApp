import React from "react"

const ToDo = props => {
  return (
    <ul>
      <li 
      className={`toDoItem ${props.toDo.completed ? "complete" : null}`}
      onClick={() => props.toggle(props.toDo.id)}
      > 
       {props.toDo.task} 
      </li>
      <button 
       className='clear-btn' 
       onClick={props.clearCompleted} 
       type="submit"> X </button>
    </ul>

  );
}

export default ToDo;