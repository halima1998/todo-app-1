import React from 'react';
import axios from "axios";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      items: [],
      load: false
    }
  }     
  
  handleSubmit = () => {
    const {email, password} = this.state;
    const { history } = this.props;

    axios.post("login", this.state)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      const config = {
        headers: { Authorization: `Bearer ${res.data.token}` }
    };
    axios.post("verify", {}, config)
    .then((res2) => {
      localStorage.setItem("user", JSON.stringify(res2.data.user))
      history.push('/TodoList', {todo: res2.data.todo})
    })
    }).catch((err) => {
        console.log (err)
    })

    }
    
    handelChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }
    
    render(){
    let {isload, items} = this.state;

        return (
        <div className="base-container">
            <div className="container">
            <div className ="header" >Login</div>
            <div className ="content">
                 <div className="form">
                     <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" name="email" 
                       value= {this.state.email} required placeholder="Email_address" 
                       onChange= {this.handelChange}/>
                     </div>
                     <div className="form-group">
                       <label htmlFor="password">Password</label>
                       <input type="password" value= {this.state.password} name="password" required placeholder="Password" onChange= {this.handelChange} />
                     </div>
                 </div>
            </div>
            <div className="footer">
              <button type="button"className="btn" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
            </div>
        </div> 
        );
    }
}


export default Login;