import { combineReducers } from 'redux';

import loadReducer from './loadReducer';

export default combineReducers({
  load: loadReducer
})