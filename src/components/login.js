import React from 'react';
import axios from "axios";
import Header from "./HR/header";

const intialState = {
  email:'',
  password:''
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialState;
  }     
  validate = () =>{
    let  emailError = "";
    let  passwordError = "";
    if(!this.state.password){
       passwordError = "enter your password";
    }
    if(!this.state.email.includes('@')){
      emailError = "invalid email"
    }
    if(emailError || passwordError){
      this.setState({emailError, passwordError});
      return false;
    }
    return true;
   } 
  handleSubmit = () => {
    const {email, password} = this.state;
    const { history } = this.props;
    const isvalid = this.validate();
    if(isvalid) {
    axios.post("login", this.state)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      const config = {
        headers: { Authorization: `Bearer ${res.data.token}` }
    };
    axios.post("verify", {}, config)
    .then((res2) => {
      localStorage.setItem("user", JSON.stringify(res2.data.user))
      history.push('/app', {todo: res2.data.todo})
    })
    }).catch((err) => {
        console.log (err)
    })
    this.setState(intialState); 
  }
    }
    
    handelChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }
    
    render(){
        return (
          <div>
               <nav class="navbar">
                 <div class="brand-title"><a style={{textDecoration:'none'}} href="/">Home</a></div>
                 <div class="navbar-links">
                   <ul>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                   </ul>
                 </div>
               </nav>
       
        <div className="base-container">
            <div className="container2">
            <div className ="header" >Login</div>
            <div className ="content">
                 <div className="form">
                     <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" name="email" 
                       value= {this.state.email} required placeholder="Email_address" 
                       onChange= {this.handelChange}/>
                        <div className="text">
                          {this.state.emailError}
                          </div>
                     </div>
                     <div className="form-group">
                       <label htmlFor="password">Password</label>
                       <input type="password" value= {this.state.password} name="password" 
                       required placeholder="Password" onChange= {this.handelChange} />
                        <div className="text">
                          {this.state.passwordError}
                          </div>
                     </div>
                 </div>
            </div>
            <div className="footer">
              <button type="button" className="btn1" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
            </div>
        </div> 
        </div>
        );
    }
}


export default Login;