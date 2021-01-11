import React from "react";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userSignedOut } from "../../actions";

function LoginLogOutArea(props) {
  const handleClick = () => {
    auth.signOut();
    props.userSignedOut();
  };

  return (
    <div>
      {props.isLoggedIn.user ? (
        <div>
          <Link to='/Profile'>
            <button className='loginLogout'>
              {props.isLoggedIn.user.displayName
                ? props.isLoggedIn.user.displayName
                : props.isLoggedIn.user.email}
            </button>
          </Link>

          <button
            className='loginLogout'
            onClick={() => {
              handleClick();
            }}>
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { userSignedOut })(LoginLogOutArea);
