export const originField = (origin, originField) => ({
  type: "ORIGIN",
  payload: { origin, originField },
});

export const roastField = (roast, roastField) => ({
  type: "ROAST",
  payload: { roast, roastField },
});

export const basketSizeField = (basket) => ({
  type: 'BASKET',
  payload: {basket}
})

export const updateRecipe = (data) => ({
  type: "UPDATED_RECIPE",
  payload: data,
});

export const flowFeedback = (data) => ({
  type: "FLOW_FEEDBACK",
  payload: data,
});

export const tasteFeedback = (data) => ({
  type: "TASTE_FEEDBACK",
  payload: data,
});

export const recipesCleaned = (data) => ({
  type: "RECIPES_CLEANED",
  payload: data,
});

export const userLoggedIn = (data) => ({
  type: "USER_LOGGED_IN",
  payload: data,
});

export const userCreation = (data) => ({
  type: "USER_CREATION",
  payload: data,
});

export const userSignedOut = () => ({
  type: "USER_SIGNED_OUT",
});

export const recipeSaved = (data) => ({
  type: "RECIPE_SAVED",
  payload: data,
});

export const isLoadingAction = () => ({
  type: "IS_LOADING",
});

export const recipesWereLoaded = (data) => ({
  type: "RECIPES_WERE_LOADED",
  payload: data,
});

export const savedRecipeDetails = (data) => ({
  type: "SAVED_RECIPE_DETAILS",
  payload: data,
});

export const errorMessageAdded = (data) => ({
  type: "ERROR_MESSAGE_ADDED",
  payload: data,
});

export const menuIsDisplayed = (data) => ({
  type: "MENU_IS_DISPLAYED",
  payload:data,
});
