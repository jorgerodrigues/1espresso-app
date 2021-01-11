import React from "react";
import Recipe from "./Recipe";
import Feedback from "./Feedback";
import { connect } from "react-redux";
import { updateRecipe, recipeSaved, recipesCleaned } from "../actions";
import { db } from "./firebase";
import SavedRecipeInfo from "./SavedRecipeInfo";
import ErrorOrSuccessMessage from "./utils/ErrorOrSuccessMessage";

class DialTool extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  // TODO move the functions generate and calculate to a separate file to be imported here

  calculateNewRecipe(e) {
    const newValues = {
      ...this.props.recipeHistory[this.props.recipeHistory.length - 1],
    };
  
    newValues.BasketSize = this.props.basketSize;
    

    if (this.props.flow[this.props.flow.length - 1] === "Too quick") {
      if (this.props.taste[this.props.taste.length - 1] === "Too sour") {
        newValues.Grind = "Finer";
      }
      if (this.props.taste[this.props.taste.length - 1] === "Just right") {
        console.log("Use this recipe");
      }
      if (this.props.taste[this.props.taste.length - 1] === "Too bitter") {
        newValues.Dose = newValues.Dose + 1;
        newValues.Grind = "-";
      }
    }
    if (this.props.flow[this.props.flow.length - 1] === "Just right") {
      if (this.props.taste[this.props.taste.length - 1] === "Too sour") {
        newValues.Dose = newValues.Dose - 1;
        newValues.Grind = "-";
      }
      if (this.props.taste[this.props.taste.length - 1] === "Just right") {
        console.log("Use this recipe");
      }
      if (this.props.taste[this.props.taste.length - 1] === "Too bitter") {
        newValues.Time = newValues.Time + 2;
        newValues.Grind = "-";
      }
    }
    if (this.props.flow[this.props.flow.length - 1] === "Too slow") {
      if (this.props.taste[this.props.taste.length - 1] === "Too sour") {
        newValues.Dose = newValues.Dose - 1;
        newValues.Grind = "-";
      }
      if (this.props.taste[this.props.taste.length - 1] === "Just right") {
        console.log("Use this recipe");
      }
      if (this.props.taste[this.props.taste.length - 1] === "Too bitter") {
        newValues.Grind = "Coarser";
      }
    }

    return newValues;
  }

  generateNewRecipe(e) {
    const newRecipe = this.calculateNewRecipe(e);
    this.props.updateRecipe(newRecipe);

    setTimeout(() => {
      window.scrollTo({
        top: this.ref.current.offsetTop - 25,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  }

  async saveRecipeToUserProfile() {
    const lastRecipe = this.props.recipeHistory[
      this.props.recipeHistory.length - 1
    ];
    const recipeComments = { ...this.props.savedRecipeInfo };

    await db.collection("recipes").add({
      ...lastRecipe,
      ...recipeComments,
      UserId: this.props.isLoggedIn.user.uid,
    });

    this.props.recipeSaved(lastRecipe);
  }

  showSaveButtonOrLoginNeededMessage() {
    if (this.props.isLoggedIn.user === null) {
      return (
        <div>
          <ErrorOrSuccessMessage
            type='errorMessage'
            message='This is your recipe. If you want to save your recipe, please login or create a profile.'
          />
        </div>
      );
    } else if (this.props.isRecipeSaved === "") {
      return (
        <div>
          <SavedRecipeInfo />
          <button
            className='primaryButton'
            onClick={() => {
              this.saveRecipeToUserProfile();
            }}>
            Save this recipe
          </button>
        </div>
      );
    } else {
      return <div className='successMessage'>Your recipe was saved</div>;
    }
  }

  render() {
    const recipeHistoryLastItem = this.props.recipeHistory.length - 1;
    const allRecipes = this.props.recipeHistory.map((recipe, index) => (
      <div className='recipeAndFeedback' key={index} ref={this.ref}>
        <div className='dialToolPieces'>
          <Recipe
            dose={recipe.Dose}
            grind={recipe.Grind}
            time={recipe.Time}
            key={recipe.length}
            coffeeOut={recipe.Dose * 2}
          />
        </div>
        <hr />
        <Feedback feedbackType='flow' />
        <Feedback feedbackType='taste' />

        {index === recipeHistoryLastItem ? (
          this.props.taste[this.props.taste.length - 1] !== "Just right" ? (
            <div>
              <button
                className='primaryButton'
                onClick={(e) => this.generateNewRecipe(e)}>
                Update recipe
              </button>
              <button
                className='secondaryButton'
                onClick={() => window.location.reload()}>
                Clear recipes
              </button>
            </div>
          ) : (
            <div className='recipeComments'>
              {this.showSaveButtonOrLoginNeededMessage()}
            </div>
          )
        ) : (
          ""
        )}
        <br />
        <hr />
      </div>
    ));

    return (
      <div className='dialTool'>
        <div>{allRecipes}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipeHistory: state.recipeHistory,
    flow: state.flow,
    taste: state.taste,
    basketSize: state.basketSize,
    isLoggedIn: state.isLoggedIn,
    isRecipeSaved: state.recipeSaved,
    savedRecipeInfo: state.savedRecipeInfo,
  };
};

export default connect(mapStateToProps, {
  updateRecipe,
  recipesCleaned,
  recipeSaved,
})(DialTool);
