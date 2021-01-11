const displayMenu = (state = false, action) => {
    switch (action.type) {
      case "MENU_IS_DISPLAYED":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default displayMenu;
  