const recipesProfileLoadReducer = (state = [], action) => {
  switch (action.type) {
    case "RECIPES_WERE_LOADED":
      return [...action.payload];
    default:
      return state;
  }
};

export default recipesProfileLoadReducer;
