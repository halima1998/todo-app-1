import React from 'react'; 
import TodoForm from './TodoForm';
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
        })
        .then(res =>{
            console.log(res)
        })
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

export default TodoList;