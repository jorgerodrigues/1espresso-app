import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Profile from "./user/profile";
import EditProfile from "./user/EditProfile";
import PassworReset from "./user/PasswordReset";
import ErrorOrSuccessMessage from "./utils/ErrorOrSuccessMessage";
import Loader from "./utils/Loader";
import LandingPage from "./LandingPage";
import DeleteAccount from './user/DeleteAccount'
import NavBar from './utils/NavBar'
import About from './About'

import { auth } from "./firebase";
import { userLoggedIn, isLoadingAction, menuIsDisplayed } from "../actions/";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/styles.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.firebaseListener = auth.onAuthStateChanged((user) => {
      this.props.userLoggedIn(user);
      this.props.isLoadingAction();
    });
  }

  componentWillUnmount() {
    this.firebaseListener ();
  }

  async resendVerificationEmail() {
    await auth.currentUser.sendEmailVerification();
    console.log("Verification email sent");
  }



  render() {
    return (
      <div>
        <div>
          {this.props.isLoading === true ? (
            <Loader />
          ) : (
            <Router>
              <Header />
              <div className='contentArea'>
                <div>
                  {this.props.isLoggedIn.user !== null &&
                  this.props.isLoggedIn.user.emailVerified === false ? (
                    <ErrorOrSuccessMessage
                      type='errorMessage'
                      message={
                        <div>
                          Please verify your email by clicking on the link we
                          have sent you
                          <div
                            className='clickableLink'
                            onClick={() => {
                              this.resendVerificationEmail();
                            }}>
                            Re-send email
                          </div>
                        </div>
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>
                <Route exact path='/'>
                  <LandingPage />
                </Route>
                <Route exact path='/app' component={App}></Route>
                <Route exact path='/Login'>
                  {this.props.isLoggedIn.user !== null ? <App /> : <Login />}
                </Route>
                <Route
                  exact
                  path='/Signup'
                  component={this.props.isLoggedIn.user !== null ? App : Signup}
                />
                <Route
                  exact
                  path='/Profile/'
                  component={
                    this.props.isLoggedIn.user !== null ? Profile : Login
                  }></Route>
                <Route
                  path='/editprofile/:userId'
                  component={
                    this.props.isLoggedIn.user !== null ? EditProfile : Login
                  }
                />
                <Route path='/passwordreset' component={PassworReset} />
                <Route exact path='/About' component={About} />
                <Route path='/landing' component={LandingPage} />
                <Route exact path='/DeleteAccount' component={this.props.isLoggedIn.user !== null ? DeleteAccount : LandingPage } />
              </div>
              {window.screen.availWidth < 800 ? <NavBar /> : <Footer/>}
            </Router>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { userLoggedIn, isLoadingAction, menuIsDisplayed })(
  Main
);
