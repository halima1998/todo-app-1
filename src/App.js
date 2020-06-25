import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "./components/style.css";
import {BrowserRouter ,Link,Switch,Route, Redirect  } from 'react-router-dom';
// import  { register} from "./components/index";
import Login from "./components/login";
import Register from "./components/register"
import LandingPage from "./components/landingPage"
const Router = require ("react-router-dom")
// const Link = require ("react-router-dom").Link;s
// const gopage = () =>(
//   <div><Link to="/login">Register</Link></div>
// )
// const Approuter = (
//     <BrowserRouter>
//       <div>
//       <Switch>
//         {/* <Route path="/" exact component={LandingPage} /> */}
//         <Route   exact component={gopage}/>
//         {/* <Route path="/login"  component={Login}/> */}
//       </Switch>
//       </div>
//       </BrowserRouter>
// )

function App() {
  return (
    <div className="App">
        <Register/>
    </div>
  );
}

export default App;
