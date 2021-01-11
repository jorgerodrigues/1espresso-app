import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
