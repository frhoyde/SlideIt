import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from './Form';
import 'font-awesome/css/font-awesome.min.css';


const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isDesigner, setDesigner] = useState(false);
    

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
     // return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
          isDesigner
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      //history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            username: {
                value: username,
                isRequired: true,
            },
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            });

            isValid = false;
        }
        return isValid;
    };

   
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };

    return (
        <div className="row g-0 auth-wrapper">
             <div >
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={registerHandler} autoComplete={'off'}>

                                <div className="name mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.name ? 'is-invalid ' : ''}`}
                                        id="name"
                                        name="name"
                                        value={username}
                                        placeholder="Name"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.name) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.name) ? validate.validate.name[0] : ''}
                                    </div>
                                </div>

                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                    </div>
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button type="button" className="btn btn-outline-dark btn-sm" style={{color:"#000"}} onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} ></i> </button>

                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                            {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                        </div>
                                    </div>

                                </div>
                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="confirmpassword"
                                            id="confirmpassword"
                                            value={confirmpassword}
                                            placeholder="Confirm Password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />

                                        <button type="button" className="btn btn-outline-dark btn-sm" style={{color:"#000"}} onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} ></i> </button>

                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                            {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                        </div>
                                    </div>

                                </div>
                                <div style={{paddingBottom: "12px"}}>
                                            <div className="form-check" >
                                                <input className="form-check-input" type="checkbox" id="remember" checked={isDesigner} onChange={(e) => setDesigner(e.currentTarget.checked)} />
                                                <label className="form-check-label" htmlFor="remember">
                                                   Sign up as a Designer
                                                </label>
                                            </div>
                                        </div>
                                <div className="text-center">
                                     
                                    <button type="submit" className="btn btn-link btn-dark w-100 theme-btn mx-auto" to="/dashboard" style={{textDecoration: "none", color:"#fff"}}>Sign Up</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">Have an account? <Link className="text-link" style={{textDecoration: "none"}}  to="/signin" >Sign in</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signup;
