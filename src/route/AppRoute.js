import { BrowserRouter as  Switch, Route, Router } from 'react-router-dom';
import Login from "../components/login";
import Register from "../components/register"
import LandingPage from "../components/landingPage";
import history from "../utils/history";
import TodoList from "../components/TodoList";
import AllTodo from "../components/AllTodo";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
function Approuter() { 
    return (
      <Router history={history} >
        <Switch>
            <PublicRoute />
            <PrivateRoute />
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login"  component={Login} />
          <Route path="/todoList" component={TodoList} />
          <Route path="/allTodo" component={AllTodo}></Route>
        </Switch>
        </Router>
    )
    }  