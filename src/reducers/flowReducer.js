const flowReducer = (state = [], action) => {
  switch (action.type) {
    case "FLOW_FEEDBACK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default flowReducer;
