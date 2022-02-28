import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Private Route

import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/Dashboard/dashboard";
//import Dashboard from "./components/Dashboard/dashboardnew";
import Home from "./pages";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";

import ForgotPassPage from "./pages/forgotpassword";

function App() {
  return (
    <Router>
      <Switch>
        {/* <PrivateRoute exact path="/" componenet={Dashboard}/> */}
        <Route exact path="/" component={Home} exact />
        {/* <Route path="/signin" component={Login} exact/> */}
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/forgot-password" component={ForgotPassPage} exact />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
