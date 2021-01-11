import React, { useRef, useState } from "react";
import ErrorOrSuccessMessage from "../utils/ErrorOrSuccessMessage";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const emailRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendResetPasswordLink = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      setSuccessMessage(
        "A reset password link was sent to the email. Please use the link to create a new passowrd."
      );
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(
        "This email was not found. Please create a new account or correct the email."
      );
      setSuccessMessage("");
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className='loginSignUpForm'
        onSubmit={(e) => {
          e.preventDefault();
          sendResetPasswordLink(emailRef.current.value);
        }}>
        <div>
          {successMessage ? (
            <ErrorOrSuccessMessage
              message={successMessage}
              type='successMessage'
            />
          ) : (
            ""
          )}
        </div>
        <div>
          {errorMessage ? (
            <ErrorOrSuccessMessage message={errorMessage} type='errorMessage' />
          ) : (
            ""
          )}
        </div>
        <h2>Password Reset</h2>
        <label>Email:</label>
        <input type='email' ref={emailRef} required autoComplete='off' />
        <button className='primaryButton'>Reset my password</button>
        Already have an account? <Link to='/Login'>Login here.</Link>
      </form>
    </div>
  );
};

export default PasswordReset;
