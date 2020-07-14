import React from 'react';
import "/home/mkhalil/Projects/todo/node_modules/bootstrap/scss/bootstrap.scss";
// import logo from './logo.svg';
import './App.css';
import "./components/style.css";
import { BrowserRouter as  Switch, Route, Router } from 'react-router-dom';
<<<<<<< HEAD
import TodoList from "./components/TodoList";
=======
>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905
import Login from "./components/login";
import Register from "./components/register"
import LandingPage from "./components/landingPage";
import history from "./utils/history";
<<<<<<< HEAD
// import TodoForm from "./components/todoForm";
=======
import TodoList from "./components/TodoList";

>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905




function Approuter() { 
  return (
    <Router history={history} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login"  component={Login} />
        <Route path="/todoList" component={TodoList} />
<<<<<<< HEAD
        {/* <Route path="/list" component={list} /> */}
        {/* <Route path="/listItems" component={ListItems}/> */}
=======
>>>>>>> 52d60b565d07a1ae1eeb5b6039585f29236a3905
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
