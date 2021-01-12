import React from "react";
import userPic from "../../assets/user.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";

const Profile = (props) => {
  return (
    <div>
      <div className='profileForm'>
        <div>
          <img className='profilePicture' src={userPic} alt='User profile' />
        </div>
        <label className='userName'>{props.isLoggedIn.user.displayName}</label>
        <div className='profileEmail'>{props.isLoggedIn.user.email}</div>
        <div className='profileData'>
          {/* <div className='profileDataItem'>
            <label>Followers</label>
            <div className='profileDataItemValue'>25</div>
          </div> */}
          <div className='profileDataItem'>
            <label>Recipes</label>
            <div className='profileDataItemValue'>{props.recipesLoaded.length}</div>
          </div>
          {/* <div className='profileDataItem'>
            <label>Following</label>
            <div className='profileDataItemValue'>9</div>
          </div> */}
        </div>
        <Link to={`/editprofile/${props.isLoggedIn.user.uid}`} className='primaryButton'>
          Edit profile
        </Link>
      </div>
      <h2>Your saved recipes:</h2>
      <div>
        <RecipeList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    recipesLoaded: state.recipesLoaded,
  };
};

export default connect(mapStateToProps)(Profile);
