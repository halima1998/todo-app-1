
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

export default TodoForm;