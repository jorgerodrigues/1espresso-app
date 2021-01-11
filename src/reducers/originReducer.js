const originReducer = (state = [], action) => {
  switch (action.type) {
    case "ORIGIN":
      return action.payload.origin;
    default:
      return state;
  }
};

export default originReducer;
