import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.components";
import SignUp from "./components/signup.components";
import Home from './pages';
import SigninPage from './pages/signin';


function App(){
  return (
    <Router>
       <Switch>
             <Route exact path='/' component={Home} exact />
             {/* <Route path="/signin" component={Login} exact/> */}
             <Route path="/signup" component={SigninPage} exact/>
           </Switch>
    
    </Router>
  );
}

export default App;