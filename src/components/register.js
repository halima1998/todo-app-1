import React from 'react';
import axios from "axios";
// import {Link, Redirect} from "react-router-dom";
// import loginImg from "../../login.svg";
// export {Register} from './register';
import {History, useHistory} from "react-router";
import Login from "./login";
import {BrowserRouter as Router,Link,Switch,Route, Redirect  } from 'react-router-dom';
import router from '../../todo-app-master/router/route';
import history from "./components/history"
// import { Redirect } from 'react-router-dom';



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      last_name:'',
      userName: '',
      email:'',
      password:''
    }
//     state = { redirect: null };
// render() 
//   if (this.state.redirect) {
//     return( <Redirect to={this.state.redirect} />
    
//     );
//   }
  
  // Your Code goes here
  



    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handelChange = this.handelChange.bind(this);
    function loginPage (){
      const history = useHistory;
    }

  }     
  handleSubmit() {
      // event.preventDefault();
      history.push("/login")

  //     <Link to = "/login">login</Link>
      //  try {
      //    await Auth.register(name,last_name,userName,email,password);
      //    userHasAuthentication(true);
      //    history.push("/login");
      //  } catch (e){
      //    alert(e.message);
      //  }
  
      console.log (this.state)
      axios.post("singUp", this.state)
      .then(res => {
        console.log(res)
        console.log(res.data);
        return <Link to={"/login"} ></Link>
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
      // console.log (this.state)
        return (
        <div className="base-container">
            <div className="container1">
            <div className ="header" >Register Form</div>
            <div className ="content">
                 <div className="form">
                     <div className="form-group">
                       <label htmlFor="username">First Name</label>
                       <input type="text" value= {this.state.name} name="name" placeholder="First_name" onChange= {this.handelChange} />
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">Last Name</label>
                       <input type="text" value= {this.state.last_name} name="last_name" placeholder="Last_name" onChange= {this.handelChange} />
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">User Name</label>
                       <input type="text" value= {this.state.userName} name="userName" placeholder="User_name" onChange= {this.handelChange} />
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">Email</label>
                       <input type="email" name="email" value= {this.state.email} placeholder="Email_address" onChange= {this.handelChange} />
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">Password</label>
                       <input type="password" value= {this.state.password} name="password" placeholder="Password" onChange= {this.handelChange} />
                     </div>
                 </div>
            </div>
            <div className="footer">
            {/* <Link to={'/Login'} className="nav-link">Login</Link>    
            <Router>
              <Link to={'/Signup'} className="nav-link">Register From</Link>
              <Switch>    
                 <Route  path='/login' component={Login} />    
                 <Route exact path='/register' component={Register} />    
       
              </Switch>    
  
            </Router>   */}


              <button type="button"className="btn" onClick={this.handleSubmit}>
                Register
              </button>
            </div>
            </div>
        </div> 
        );
    }
}


export default Register;