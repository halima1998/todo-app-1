import React from 'react'; 

export class Login extends React.Component{
    constructor(props){
        super (props);
    }
    
    render(){
        return (
        <div className="base-container">
            <div className="container">
            <div className ="header">Login</div>
            <div className ="content">
                 <div className="form">
                     <div className="form-group">
                       <label htmlFor="username">User Name</label>
                       <input type="text" name="username" placeholder="User_name"/>
                     </div>
                     <div className="form-group">
                       <label htmlFor="username">Password</label>
                       <input type="password" name="password" placeholder="Password"/>
                     </div>
                 </div>
            </div>
            <div className="footer">
                <button type="button"className="btn">Login</button>
            </div>
            </div>
        </div> 
        );
    }
 }

export default Login;