import React, { useState } from 'react';
import axios from 'axios';


class  TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todo: '',
          description: ''
        //   user_id: ''
        }
      } 
      
    handleChange = (event)=>{
        // this.setState({value: e.target.value.substr(0,300)});    handelChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    };
    handleSubmit = () => {
        const { history } = this.props;
        const {todo , description} = this.state;
        axios.post('add/todo', this.state)
          .then(res => {
            console.log(res)
            // history.push('/login')
          }).catch((err) => {
            console.log(err)
          })
      }   
render(){
return(
    <div className="base-container">
        <div className="text">
            <label htmlFor="todo">TodoName</label>
            <input type="text" name="todo"  placeholder="enter your todo name"
             value= {this.state.todo} onChange= {this.handleChange}/>
             {/* <ol>
                <li>{input}</li>
             </ol> */}
          </div>
          <div className="textArea">
              <label htmlFor="description">Description</label>
              <br></br>
              <textarea type="text"  name="description" value={this.state.description}
               onChange= {this.handleChange}/>
            </div>
            <div className="footer">
              <button type="button"className="btn" onClick={this.handleSubmit}>
                Send Message
              </button>
            </div>
            
    </div>

  );
 }
}
export default TodoList;