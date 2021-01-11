const userLoggedInReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        user: action.payload,
      };
    case "USER_SIGNED_OUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default userLoggedInReducer;
