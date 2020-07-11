import React from 'react';
import axios from "axios"; // fetch, request, xmlHTTPrequest, AJAX.



const intialState = {
  name: '',
  last_name:'',
  userName: '',
  email:'',
  password:''
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = intialState;
  }  
  validate = () =>{
    let nameError ="";
    let  emailError = "";
    let  passwordError = "";
 
    if(!this.state.name) {
      nameError = "enter your name";
    }
    if(!this.state.password){
       passwordError = "enter your password";
    }
    if(!this.state.email.includes('@')){
      emailError = "invalid email"
    }
    if(emailError || passwordError||nameError){
      this.setState({emailError, passwordError, nameError});
      return false;
    }
    return true;
   }   
  
  handleSubmit = () => {
    const { history } = this.props;
    const isvalid = this.validate();
    if(isvalid) {
    axios.post("signUp", this.state)
    .then(res => {
      console.log(res.data)
      if(res.data){
        history.push('/login')
      }
      else{
        alert("email address is already exist")
      }
    }).catch((err) => {
        console.log (err)
    })  
    this.setState(intialState); 
  }
    }
    
    handelChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value)
      this.setState({
        [name]: value
      })
    }
    
    render() {
        return (
        <div className="base-container">
            <div className="container1">
            <div className ="header" >Register Form</div>
            <div className ="content">
                 <div className="form">
                     <div className="form-group">
                       <label htmlFor="name">First Name</label>
                       <input type="text" value= {this.state.name} name="name" 
                       placeholder="First_name" required onChange= {this.handelChange}/>
                       <div className="text">
                          {this.state.nameError}
                          </div>
                     </div>
                     <div className="form-group">
                       <label htmlFor="last_name">Last Name</label>
                       <input type="text" value= {this.state.last_name} name="last_name"
                        placeholder="Last_name" required onChange= {this.handelChange}/>
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">User Name</label>
                       <input type="text" value= {this.state.userName} name="userName" 
                       placeholder="User_name" required onChange= {this.handelChange} />
                     </div>
                     <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" name="email" value= {this.state.email} 
                       placeholder="Email_address" required onChange= {this.handelChange} />
                       <div className="text">
                          {this.state.emailError}
                          </div>
                     </div>
                     <div className="form-group">
                       <label htmlFor="password">Password</label>
                       <input type="password" value= {this.state.password} name="password" 
                       placeholder="Password" required onChange= {this.handelChange}/>
                       <div className="text">
                          {this.state.passwordError}
                          </div>
                     </div>
                 </div>
            </div>
          
          <div className="footer">
            <button type="button" className="btn" onClick={this.handleSubmit}>
              Register
              </button>
          </div>
          </div>
        </div>
    );
  }
}


export default Register;