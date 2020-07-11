import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component{
    state ={
        text:''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text:this.state.text,
            complete: false
        });
        this.setState({
            text:""
        });
    }

    render(){
        return(
            // <div className="base-container2">
            //  <div className="container3">/
            <form onSubmit={this.addTodo}>
            <div className="form">
            <div className="form-group1">
             <input name="text" value={this.state.text}
              onChange={this.handleChange}
              placeholder="todo..."/>
                </div>
                </div>
                <div className="form-group2">
              <textarea name="description" type="text" placeholder="desc..." />
            <div className="footer">
              <button className="btn" onClick={this.handleSubmit}>Add Todo</button>
              </div>
              </div>
            </form>
            // </div>
            //  </div>
        );
    }
}

export default TodoForm;