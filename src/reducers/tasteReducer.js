const tasteReducer = (state = [], action) => {
  switch (action.type) {
    case "TASTE_FEEDBACK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tasteReducer;
