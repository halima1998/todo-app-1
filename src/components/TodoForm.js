import React from 'react';
import shortid from 'shortid';
import axios from 'axios'

class TodoForm extends React.Component{
          state ={
        todo:''
};
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            todo:this.state.todo,
        });
        this.setState({
            todo:""
        });
    }

    render(){
        return(
            <form onSubmit={this.addTodo}>
            <div className="form">
            <div className="form-group1">
             <input name="todo" type="text" value={this.state.todo}
              onChange={this.handleChange}
              placeholder="todo..."/>
                </div>
                </div>
            <div className="footer">
              <button className="btn" onClick={this.handleSubmit}>Add Todo</button>
              </div>
            </form>
        );
    }
}

export default TodoForm;