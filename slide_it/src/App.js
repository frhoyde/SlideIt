import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

//Private Route

import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/Dashboard/dashboard";

// import DashboardTemplate from "./components/Dashboard/dashboardTemplate";

import Home from "./pages";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";

import ForgotPassPage from "./pages/forgotpassword";
import TextEditor from "./pages/TextEditor";

import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Home} exact />
        {/* <Route path="/signin" component={Login} exact/> */}
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/forgot-password" component={ForgotPassPage} exact />

        {/* <Route exact path="/dashboardTemplate" component={DashboardTemplate} />  */}

        {/*<Route exact path="/dashboard" component={Dashboard} />*/}

        <Route path="/document" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id" component={TextEditor} />
      </Switch>
    </Router>
  );
}

export default App;
