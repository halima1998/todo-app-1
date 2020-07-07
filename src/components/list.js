import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './todoList';

class  list extends React.Component {
    state = {
          todos:[]
        };
        
        addTodo = todo =>{
            this.setState({
                todos:[todo, ...this.state.todos]
            });
        } 
      
      render(){
          return(
              <div>
                  <TodoList onSubmit={this.addTodo}/>
                  {this.state.todos.map(todo =>( <div key={todo.id}>{todo.text}</div>))}
              </div>
          )
      }
    }
    export default list;