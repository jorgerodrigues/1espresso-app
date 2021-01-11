const userCreationReducer = (state = "", action) => {
  switch (action.type) {
    case "USER_CREATION":
      return {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    default:
      return state;
  }
};

export default userCreationReducer;
