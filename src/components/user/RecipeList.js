import React, { useEffect } from "react";
import { db } from "../firebase";
import { connect } from "react-redux";
import { recipesWereLoaded } from "../../actions/index";
import Recipe from "../Recipe";

const RecipeList = (props) => {
  // get the recipes, add them to an array and return this array.
  //todo add the resulting array to redux state
  const getRecipes = async () => {
    const currentLoggedUser = props.isLoggedIn.user.uid.toString();
    const queryResult = await db
      .collection("recipes")
      .where("UserId", "==", currentLoggedUser)
      .get();

    let allRecipes = [];
    queryResult.forEach((doc) => {
      allRecipes.push(doc.data());
    });
    return allRecipes;
  };

  useEffect(() => {
    getRecipes().then((recipes) => {
      props.recipesWereLoaded(recipes);
    });
    // eslint-disable-next-line
  }, []);
  // #########################

  const recipes = props.recipesLoaded.map((recipe, index) => {
    return (
      <div className='userProfileRecipeCard' key={index}>
        <div className='recipeAndFeedback'>
          <h3>{recipe.CoffeeName}</h3>
          <hr />
          <div className='dialToolPieces'>
            <Recipe
              dose={recipe.Dose}
              time={recipe.Time}
              coffeeOut={recipe.CoffeeOut}
            />
          </div>
          <hr />
          <div className='userProfileRecipeComment'>{recipe.Comments}</div>
        </div>
      </div>
    );
  });
  return <div>{recipes}</div>;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    recipesLoaded: state.recipesLoaded,
  };
};

export default connect(mapStateToProps, { recipesWereLoaded })(RecipeList);
