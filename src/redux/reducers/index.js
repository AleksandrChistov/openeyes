import { combineReducers } from 'redux';

import loadReducer from './loadReducer';
import fullScreenReducer from './fullScreenReducer'

export default combineReducers({
  load: loadReducer,
  fScreen: fullScreenReducer
})