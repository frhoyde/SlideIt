import React, { useState } from "react";
import Axios from "axios";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30",
    "& > *": {
      width: theme.spacing(45),
      height: theme.spacing(100),
    },
  },
}));

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      passord: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root} id="Regcard">
        <Paper elevation={15}>
          <div className="form_container">
            <div className="registration">
              <h1>Registration</h1>
              <TextField
                className="input"
                id="standard-password-input"
                label="Username"
                type="text"
                autoComplete="current-password"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
              <TextField
                className="input input_2"
                id="standard-password-input"
                label="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />

              <br />
              <Button onClick={register} variant="contained" color="primary">
                {" "}
                Register{" "}
              </Button>
            </div>
            <br />
            <div className="login">
              <h1>Login</h1>
              <TextField
                className="input"
                id="standard-password-input"
                label="Username"
                type="text"
                autoComplete="current-password"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
              <TextField
                className="input input_2"
                id="standard-password-input"
                label="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />
              <br />
              <Button variant="contained" color="primary">
                {" "}
                Log in{" "}
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default App;
