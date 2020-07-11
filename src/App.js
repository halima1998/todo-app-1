import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "./components/style.css";
import { BrowserRouter as  Switch, Route, Router } from 'react-router-dom';
<<<<<<< HEAD
import TodoList from "./components/TodoList";
=======
// import  { register} from "./components/index";
>>>>>>> 058aa92edaca9d103efd12f0435fe3cdfd76ae6e
import Login from "./components/login";
import Register from "./components/register"
import LandingPage from "./components/landingPage";
import history from "./utils/history";
<<<<<<< HEAD
// import TodoForm from "./components/todoForm";
=======
import todoList from "./components/todoList";
>>>>>>> 058aa92edaca9d103efd12f0435fe3cdfd76ae6e




function Approuter() { 
  return (
    <Router history={history} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login"  component={Login} />
<<<<<<< HEAD
        <Route path="/todoList" component={TodoList} />
        {/* <Route path="/list" component={list} /> */}
        {/* <Route path="/listItems" component={ListItems}/> */}
=======
        <Route path="/list" component={todoList} />
>>>>>>> 058aa92edaca9d103efd12f0435fe3cdfd76ae6e
      </Switch>
      </Router>
  )
  }


  // function Approuter1() { 
  //   return (
  //     <Router history={history} >
  //       <Switch>
  //         <Route path="/" exact component={LandingPage} />
  //         <Route path="/login" exact component={Register} />
  //         <Route path="/register"  component={Login} />
  //       </Switch>
  //       </Router>
  //   )
  //   }
  

function App() {
  return (
    <div className="App">
        <Approuter />
    </div>
  );
}

export default App;
