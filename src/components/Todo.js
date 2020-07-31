import React from "react";

import usetoggleState from "./hooks/ usetoggleState";
import EditTodo from './EditTodo';

function Todo({ id,task,todo, index, completeTodo,editTodo, removeTodo }) {
  const [isEditing , toggle] = usetoggleState(false)

    return (
      <div>
      {isEditing? <EditTodo editTodo={editTodo} id={id} task={task} toggleEdit={toggle}/>: 
        <>
      <div
        className="todo"
        // style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
           {/* <button onClick={() => completeTodo(index)}>Complete</button> */}
          <button onClick={toggle}>Edit</button>
     
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </div>
      </>
      }
      </div>
    );
  }
  export default Todo;
  