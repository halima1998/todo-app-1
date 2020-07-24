import React, { useState, useEffect } from "react";
import "../App.css";
import Todo from './Todo';
import TodoForm from './TodoForm';
import axios from 'axios'

function TodoList(props) {
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    const { location } = props;
    setTodos(location.state.todo)
  });

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos)
    
    const { id } = JSON.parse(localStorage.getItem("user"));
        // call API to add todo
        axios.post('add/todo',{
            todo:text,
            users_id:id
        })
        .then(res => {
          setTodos([...todos, res.data.data[0] ])
            // return object and push into intial state.
            console.log(res)
        })
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    axios.post("commpleted/todo",{
      data:index
  })
  .then(res =>{
      console.log(res)
  })
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    axios.delete(`delet/todo/${index.id}`)
        .then(res => {
            console.log(todos, "najee")
        })
  };

  // console.log(todos, "Pj")
  return (
    <div className="app">
      <div className="todo-list">
      <div className ="header1">Todo List</div>
        {todos.map((item, index) => (
          <Todo
            key={index}
            index={index}
            todo={item.todo}
            todo_id={item.id}
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