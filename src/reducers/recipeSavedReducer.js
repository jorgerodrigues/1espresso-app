const recipeSavedReducer = (state = "", action) => {
  switch (action.type) {
    case "RECIPE_SAVED":
      return action.payload;
    default:
      return state;
  }
};

export default recipeSavedReducer;
