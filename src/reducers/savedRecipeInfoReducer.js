const savedRecipeDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAVED_RECIPE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default savedRecipeDetailsReducer;
