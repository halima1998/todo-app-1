import React from 'react';
import axios from "axios";


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
  
  // Your Code goes here
  
  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handelChange = this.handelChange.bind(this);
  }     
  
  handleSubmit = () => {

    const { history } = this.props;

    axios.post("singUp", this.state)
    .then(res => {
      console.log(res)
      history.push('/login')
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
      console.log(this.props, "Pralhad")
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