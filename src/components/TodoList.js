import React, { useState} from "react";
import "../App.css";
import Todo from './Todo';
import TodoForm from './TodoForm';
import axios from 'axios';

function TodoList(props) {
  const [todos, setTodos] = useState([])
  const addTodo = text=> {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    const { id } = JSON.parse(localStorage.getItem("user"));
        // call API to add todo
        axios.post("add/todo",{
            todo:text,
            users_id:id
        })
        .then(res =>{
            console.log(res)
        })
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    axios.post(`completed/todo${index.id}`)
        .then((data) => {
            console.log(data)
        })
  };

  const removeTodo = index=> {
    if(window.confirm("are you sure")){
    const newTodos = [...todos];
    let del_data=newTodos[index].text
    newTodos.splice(index,1);
    setTodos(newTodos)
    axios.delete('/delete:id',{
      data:del_data
    })
    .then((res) => {
        console.log(res.data)
    })
  
    }
  }
    // const editTodo=( todoId , newTask )=> {
  //   console.log(todoId)
  //   const updateTodos = todos.map((todo) =>
  //   todo.id===todoId? {...todo, task:newTask}:
  //    todo
  //   )
  //   setTodos(updateTodos)
  // };

  return (
    <div className="app">
      <div className="todo-list">
      <div className ="header">Todo List</div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            // editTodo={editTodo}
          />
        ))}
        
        <TodoForm addTodo={addTodo} />
          
      </div>
</div>
  );
}

export default TodoList;