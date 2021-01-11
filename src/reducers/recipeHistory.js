const recipeHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATED_RECIPE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default recipeHistoryReducer;
