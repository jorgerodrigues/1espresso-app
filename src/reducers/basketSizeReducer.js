const basketSizeReducer = (state = "", action) => {
    switch (action.type) {
      case "BASKET":
        return action.payload.basket;
      default:
        return state;
    }
  };
  
  export default basketSizeReducer;
  