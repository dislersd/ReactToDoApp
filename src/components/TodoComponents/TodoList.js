import React from "react";
import ToDo from "./Todo";

// const ToDoList = props => {
//   return (
//     <div className="todo-all">
//         {props.toDo.map((toDoFromMap, index) => 
//           <ToDo 
//           key={index}
//           toDo={toDoFromMap}
//           toggle={props.toggle}
//           />
//         )}
//     </div>
//   )
// };
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     filtered: this.props.toDo;
  //   })
  // }

  render() {
  return (
    <div className="todo-all">
        {this.props.toDo.map((toDoFromMap, index) => 
          <ToDo 
          key={index}
          toDo={toDoFromMap}
          toggle={this.props.toggle}
          />
        )}
    </div>
  )
}
};

export default ToDoList;
