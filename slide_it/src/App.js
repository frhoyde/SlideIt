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
import ProtectedRoutes from './components/routing/PrivateRoute' //Authenticated routes
import PublicRoute from './components/routing/PublicRoute';
import PrivateRoute from './components/routing/ProtectedRoute'; 
import Dashboard from "./components/Dashboard/dashboard";

// import DashboardTemplate from "./components/Dashboard/dashboardTemplate";

import Home from "./pages";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";

import ForgotPassPage from "./pages/forgotpassword";
import TextEditor from "./pages/TextEditor";


import { v4 as uuidV4 } from "uuid";

function App() {
    const isAuthenticated = localStorage.getItem("authToken");
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} isAuntheticated={isAuthenticated}/>
        <PublicRoute exact path="/" component={Home} exact isAuthenticated={isAuthenticated} />
        <PublicRoute path="/signup" component={SignupPage} exact isAuthenticated={isAuthenticated}/>
        <PublicRoute path="/signin" component={SigninPage} exact isAuthenticated={isAuthenticated}/>
        <PublicRoute path="/forgot-password" component={ForgotPassPage} exact isAuthenticated={isAuthenticated}/>

        
        <Route path="/document" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id" component={TextEditor} />
      </Switch>
    </Router>
  );
}

export default App;
