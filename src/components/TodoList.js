import React, { useState } from "react";
import "../App.css";
import Todo from './Todo';
import TodoForm from './TodoForm';
<<<<<<< HEAD
import axios from 'axios';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todo: []
        }
    }
    addTodo = (todo) => {
        this.setState({
            todo: [todo, ...this.state.todo]
        });
      const { id } = JSON.parse(localStorage.getItem("user"));  
        axios.post("add/todo", {
            todo: todo,
            users_id: id
=======
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
>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905
        })
        .then(res =>{
            console.log(res)
        })
<<<<<<< HEAD
    }

    render(){
        return(
            <div className="base-container2">
                <ul>
                      <TodoForm onSubmit={this.addTodo}/>
                      {this.state.todo.map(todo =>(<div key = {todo}>{todo.todo}</div>))}
                </ul>
            </div>
        );
    }
} 
=======
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
>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905

export default TodoList;