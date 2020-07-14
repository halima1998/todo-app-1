import React, { useState } from "react";
import "../App.css";
import Todo from './Todo';
import TodoForm from './TodoForm';
import axios from 'axios'

function TodoList() {
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
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    axios.delete(`/delet/todo/${index.id}`)
        .then(res => {
            console.log(res)
        })
  };

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
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default TodoList;