import React from "react";
import ReactDOM from "react-dom";
import { 
      BrowserRouter as Router,
      Route,
      NavLink,
      withRouter 
      } from 'react-router-dom';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger

import thunk from 'redux-thunk';
import logger from 'redux-logger';



const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);




