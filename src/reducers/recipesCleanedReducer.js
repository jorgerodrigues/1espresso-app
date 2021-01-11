const recipesCleaned = (state = [], action) => {
  switch (action.type) {
    case "RECIPES_CLEANED":
      return [];
    default:
      return state;
  }
};

export default recipesCleaned;
