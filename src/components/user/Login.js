import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { userLoggedIn } from "../../actions";
import { Link } from "react-router-dom";

import ErrorOrSuccessMessage from "../utils/ErrorOrSuccessMessage";

const Login = (props) => {
  const emailRef = useRef();
  const pwRef = useRef();
  const [loginErrorMessage, setLoginErrorMessage] = useState();

  const loggingUserIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      props.userLoggedIn(auth.currentUser);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          setLoginErrorMessage("This email could not be found");
          break;
        case "auth/wrong-password":
          setLoginErrorMessage("The password is wrong. Please try again");
          break;
        default:
          setLoginErrorMessage("Something went wrong. Please try again");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loggingUserIn(emailRef.current.value, pwRef.current.value);
  };

  return (
    <div>
      <form
        className='loginSignUpForm'
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div>
          {loginErrorMessage ? (
            <ErrorOrSuccessMessage
              type='errorMessage'
              message={loginErrorMessage}
            />
          ) : (
            ""
          )}
        </div>
        <h2>Login</h2>
        <label>Email</label>
        <input type='email' ref={emailRef} required autoComplete='off' />
        <label>Password</label>
        <input type='password' ref={pwRef} required autoComplete='off' />
        <div className='smallTextUnderField'>
          <Link to='/passwordreset'>Click here</Link> to reset your password
        </div>
        <button className='primaryButton' type='submit'>
          Login
        </button>
        <div>Need an account?</div>
        <div>
          <Link to='/Signup'>Click here</Link> to create one.
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { userLoggedIn })(Login);
