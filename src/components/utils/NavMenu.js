import React, { useState } from "react";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { userSignedOut } from "../../actions/index";
import { Link } from "react-router-dom";

const App = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [displayNav, setDisplayNav] = useState("nav-hidden");
  const [hamburgerOrClose, setHamburgerOrClose] = useState("hamburger-menu");

  const menuClick = () => {
    setToggleMenu(!toggleMenu);
    menuUpdate(toggleMenu);
  };

  const menuUpdate = (menuState) => {
    if (menuState === false) {
      setDisplayNav("nav-hidden");
      setHamburgerOrClose("hamburger-menu");
    } else {
      setDisplayNav("nav-displayed");
      setHamburgerOrClose("close-menu");
    }
  };

  const handleClick = () => {
    auth.signOut();
    props.userSignedOut();
    menuClick();
  };

  return (
    <div className='menuContainer'>
      <div>
        <div
          className={hamburgerOrClose}
          onClick={() => {
            menuClick();
          }}>
          <div className='bar top'></div>
          <div className='bar middle'></div>
          <div className='bar bottom'></div>
        </div>
        <div
          className={displayNav}
          onClick={() => {
            menuClick();
          }}>
          <div>
            {props.isLoggedIn.user ? (
              <Link to='/Profile'>Profile</Link>
            ) : (
              <Link to='/login'>Profile</Link>
            )}
          </div>
          {props.isLoggedIn.user ? (
            <div
              onClick={() => {
                handleClick();
              }}>
              Logout
            </div>
          ) : (
            <div>
              <Link to='/login'>Login</Link>
            </div>
          )}
          <div>About us</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { userSignedOut })(App);
