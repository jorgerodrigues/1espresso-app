const errorMessageReducer = (state = null, action) => {
    switch (action.type) {
      case "ERROR_MESSAGE_ADDED":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default errorMessageReducer;
  