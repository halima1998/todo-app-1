import React from 'react'; 
import TodoForm from './TodoForm';

class TodoList extends React.Component{
    state = {
        todos:[],
        todo:true,
        // loading:
        users_id:null
        
    };
    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
        const { id } = JSON.parse(localStorage.getItem("user"));
        // call API to add todo

    }
    async componentDidMount (){
        const url = ("add/todo");
        const response = await fetch (url);
        const data = await response.json();
        this.setState({person :data.results[0],todo: false})
    }

    render(){
        return(
            <div className="base-container2">
                <ol>
                    <TodoForm onSubmit={this.addTodo}/>
                    {this.state.todos.map(todo =>(<div key = {todo.id}>{todo.text}</div>))}   
                </ol>
            <div>
                {this.state.todo || !this.state.user? (<div></div>) : (
                    <div>
                        <div>{this.state.todo}</div>
                        <div>{this.state.users_id}</div>
                    </div>

                )}
            </div>
            </div>

        );
    }
}

export default TodoList;