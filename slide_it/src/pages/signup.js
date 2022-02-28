import React from 'react';
import axios from 'axios';
import Signup from '../components/Signin/newsignup/Signup';
import image from '../images/sign-up.png';

const SignupPage = () => {
    return (
      <div className="container mt-3" style={{height: "100vh", /* Magic here */
      display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={image} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default SignupPage
