
<<<<<<< HEAD
class TodoForm extends React.Component{
    state ={
        todo:''
    };
    handleChange = (event) => {
        // this.setState({
            // [event.target.name]:event.target.value
        // });
        const { name, value } = event.target;
        console.log(name, value)
        this.setState({
          [name]: value
        });
  
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            // id: shortid.generate(),
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
                {/* <div className="footer"> */}
              <button className="btn" onClick={this.handleSubmit}>Add Todo</button>
              </div>
                </div>
            </form>
        );
    }
}

=======
import React, { useState } from "react";
function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
       <span> <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
         <div className="footer">
         <button className="btn">Add Todo</button></div></span>
      </form>
    );
  }
>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905
export default TodoForm;