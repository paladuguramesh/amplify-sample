import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [errorMessages, setErrorMessages] = useState({}); 

  const errors = {
    msg: "Invalid credentials"
  };

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    console.log(uname.value);
    console.log(pass.value);

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }

    // if(uname.value != "AAA") {
    //   setErrorMessages({ name: "msg", message: errors.msg });
    // }

    navigate('/dashboard', { replace: true });

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  
  
    return( 
      <div className="app">
        <div className="login-form">
        {renderErrorMessage("msg")}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" value="Login"/>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default Login;
