import React from 'react';
import Signin from '../components/Signin/newsignup/ForgotPass';
import image from '../images/image4.png';

const ForgotPassPage = () => {
    return (
      <div className="container mt-3" style={{height: "100vh", /* Magic here */
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
      <div className="row">
        <div className="col-md-5">
          <Signin />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={image} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassPage
