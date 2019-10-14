import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk';

import style from "./index.styl";
import imgLogo from './img/logo.png';
import App from './containers/app';
import rootReducer from "./redux/reducers/index";

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState());
  return result
}

 const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk));

 ReactDOM.render(
   <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>, 
document.querySelector('#app'));