import React, { useRef, useState } from "react";
import ErrorOrSuccessMessage from "../utils/ErrorOrSuccessMessage";

import userPic from "../../assets/user.png";
import { connect } from "react-redux";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function EditProfile(props) {
  const [newEmail, setNewEmail] = useState(props.isLoggedIn.user.email);
  const [newDisplayName, setNewDisplayName] = useState(
    props.isLoggedIn.user.displayName
  );
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState({
    emailChange: "",
    displayNameChange: "",
  });

  const displayName = useRef();
  const newEmailRef = useRef();

  const editProfileForm = (
    <div className='profileForm'>
      {errorMessage ? (
        <ErrorOrSuccessMessage message={errorMessage} type='errorMessage' />
      ) : (
        ""
      )}
      {successMessage.emailChange ? (
        <ErrorOrSuccessMessage
          message={successMessage.emailChange}
          type='successMessage'
        />
      ) : (
        ""
      )}
      {successMessage.displayNameChange ? (
        <ErrorOrSuccessMessage
          message={successMessage.displayNameChange}
          type='successMessage'
        />
      ) : (
        ""
      )}
      <div>
        <img className='profilePicture' src={userPic} alt='User profile' />
      </div>
      <input
        className='textField'
        ref={displayName}
        onChange={() => {
          setNewDisplayName(displayName.current.value);
        }}
        value={newDisplayName}></input>
      <input
        className='textField'
        ref={newEmailRef}
        value={newEmail}
        onChange={() => {
          setNewEmail(newEmailRef.current.value);
        }}></input>
      <div className='profileData'>
       
        <div className='profileDataItem'>
          <label>Recipes</label>
          <div className='profileDataItemValue'>
            {props.recipesLoaded.length}
          </div>
        </div>
        
      </div>
      <div>
        <button
          className='primaryButton'
          onClick={() => {
            updateProfileAction();
          }}>
          Update profile
        </button>

        <Link to='/profile' className='secondaryButton'>
          Cancel
        </Link>
        <div className='smallTextUnderField'>If you want to delete your account, <Link to='/DeleteAccount'>click here.</Link></div>
      </div>
    </div>
  );

  const updateName = async (name = "") => {
    var user = auth.currentUser;
    try {
      await user.updateProfile({
        displayName: name,
      });
      setSuccessMessage({
        displayNameChange: "Display name updated",
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const updateEmail = async (email) => {
    var user = auth.currentUser;
    try {
      await user.verifyBeforeUpdateEmail(email);
      setSuccessMessage({
        emailChange:
          "We have sent you an email verification link. Please check your email and click on the link. You will not be logged out. Please login after verifying your new email.",
      });
      setTimeout(() => {
        auth.signOut();
      }, 6000);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const updateProfileAction = () => {
    if (props.isLoggedIn.user.displayName !== displayName.current.value) {
      updateName(displayName.current.value);
    }
    if (props.isLoggedIn.user.email !== newEmailRef.current.value) {
      updateEmail(newEmailRef.current.value);
    }
  };

  // const updatePicture = (pictureUrl = "") => {
  //   var user = auth.currentUser;
  //   user.updateProfile({
  //     photoURL: pictureUrl,
  //   });
  // };

  const showEditableFields = () => {
    if (props.match.params.userId === props.isLoggedIn.user.uid) {
      return editProfileForm;
    }
  };
  // This is where the main form is rendered
  return <div>{showEditableFields()}</div>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    recipesLoaded: state.recipesLoaded,
  };
};

export default connect(mapStateToProps)(EditProfile);
