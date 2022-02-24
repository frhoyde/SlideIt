import React from 'react';
import Signup from '../components/Signin/newsignup/Signup';
import image from '../images/sign-up.png';

const SignupPage = () => {
    return (
      <div className="container mt-3" style={{padding:"4%"}}>
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
