const roastReducer = (state = "", action) => {
  switch (action.type) {
    case "ROAST":
      return action.payload.roast;
    default:
      return state;
  }
};

export default roastReducer;
