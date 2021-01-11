import { combineReducers } from "redux";
import recipeHistoryReducer from "./recipeHistory";
import originReducer from "./originReducer";
import roastReducer from "./roastReducer";
import flowReducer from "./flowReducer";
import tasteReducer from "./tasteReducer";
import recipesCleanedReducer from "./recipesCleanedReducer";
import loginReducer from "./loginReducer";
import userCreationReducer from "./userCreationReducer";
import recipeSavedReducer from "./recipeSavedReducer";
import isLoadingReducer from "./isLoadingReducer";
import recipesProfileLoadReducer from "./recipesProfileLoadReducer";
import savedRecipeDetailsReducer from "./savedRecipeInfoReducer";
import basketSizeReducer from "./basketSizeReducer";
import errorMessageReducer from "./errorMessageReducer";
import displayMenuReducer from "./displayMenuReducer";

const allReducers = combineReducers({
  recipeHistory: recipeHistoryReducer,
  origin: originReducer,
  roast: roastReducer,
  flow: flowReducer,
  taste: tasteReducer,
  recipesCleaned: recipesCleanedReducer,
  isLoggedIn: loginReducer,
  userCreated: userCreationReducer,
  recipeSaved: recipeSavedReducer,
  isLoading: isLoadingReducer,
  recipesLoaded: recipesProfileLoadReducer,
  savedRecipeInfo: savedRecipeDetailsReducer,
  basketSize: basketSizeReducer,
  errorMessage: errorMessageReducer,
  displayMenu: displayMenuReducer,
});

export default allReducers;
