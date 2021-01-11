import { auth, db } from "../firebase";
import React, { useRef, useState } from "react";
import { userLoggedIn, userCreation } from "../../actions";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ErrorOrSuccessMessage from "../utils/ErrorOrSuccessMessage";

const Signup = (props) => {
  const passwordRef = useRef();
  const passwordConfirmedRef = useRef();
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState({});

  const createUser = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      );
      await createUserFirestore();
      props.userCreation(auth.currentUser);
      props.userLoggedIn(auth.currentUser);
    } catch (err) {
      setErrorMessage({ apiResponse: err.message });
    }
  };

  const createUserFirestore = async () => {
    return await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .set({ uid: auth.currentUser.uid });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value === passwordConfirmedRef.current.value) {
      await createUser(emailRef, passwordRef);
      try {
        await auth.currentUser.sendEmailVerification();
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        <Redirect to='/' />;
      }, 13000);
    } else {
      setErrorMessage({ password: "The passwords do not match" });
    }
  };

  return (
    <div>
      <form className='loginSignUpForm'>
        <div>
          {errorMessage.apiResponse ? (
            <ErrorOrSuccessMessage
              message={errorMessage.apiResponse}
              type='errorMessage'
            />
          ) : (
            ""
          )}
        </div>
        <div>
          {errorMessage.password ? (
            <ErrorOrSuccessMessage
              message={errorMessage.password}
              type='errorMessage'
            />
          ) : (
            ""
          )}
        </div>
        <h2>Create a new account</h2>
        <label>Email</label>
        <input type='email' ref={emailRef} required autoComplete='off' />
        <label>Password</label>
        <input type='password' ref={passwordRef} required autoComplete='off' />
        <label>Confirm password</label>
        <input
          type='password'
          ref={passwordConfirmedRef}
          required
          autoComplete='off'
        />
        <button
          className='primaryButton'
          type='submit'
          onClick={(e) => handleSubmit(e)}>
          Signup
        </button>
        Already have an account? <Link to='/Login'>Login here.</Link>
        <div className='disclaimer'>
          By signing in, you agree that we store your name and email. Your data
          will not be shared and we will only write to you in regards to
          1espresso. Your data is only needed in order to keep your recipes. ;)
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isCreated: state.userCreated,
  };
};

export default connect(mapStateToProps, { userLoggedIn, userCreation })(Signup);
