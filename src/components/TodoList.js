import React from 'react'; 
import TodoForm from './TodoForm';
import axios from 'axios'

class TodoList extends React.Component{
        state = {
        todos:[],
        

        }
     addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
      
        const { id } = JSON.parse(localStorage.getItem("user"));
        // call API to add todo
        axios.post("add/todo",{
            todo:todo,
            users_id:id
        })
        .then(res =>{
            console.log(res)
        })

    }
    

    render(){
        return(
            <div className="base-container2">
                <ol>
                    <TodoForm onSubmit={this.addTodo}/>
                    {this.state.todos.map(todo =>(<div key = {todo.id}>{todo.todo}</div>))}   
                </ol>
            </div>

        );
    }
}

export default TodoList;