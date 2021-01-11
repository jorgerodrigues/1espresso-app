import React, { useRef } from "react";
import { savedRecipeDetails } from "../actions/index";
import { connect } from "react-redux";

const SavedRecipeInfo = (props) => {
  const coffeeNameRef = useRef();
  const commentsRef = useRef();

  const updateInfo = () => {
    const userComments = {
      CoffeeName: coffeeNameRef.current.value,
      Comments: commentsRef.current.value,
    };
    props.savedRecipeDetails(userComments);
  };

  return (
    <div className='commentsArea'>
      <div>
        <h3>Coffee name</h3>
        <input
          className='textField'
          type='text'
          name='coffee_name'
          ref={coffeeNameRef}
          onChange={() => {
            updateInfo();
          }}></input>
      </div>
      <div>
        <h3>Comments</h3>
        <textarea
          className='textField textArea'
          ref={commentsRef}
          onChange={() => {
            updateInfo();
          }}></textarea>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { savedRecipeDetails })(
  SavedRecipeInfo
);
