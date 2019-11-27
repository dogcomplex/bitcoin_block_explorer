import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import block from './reducers/block';

export default combineReducers({
  block,
  router: routerReducer
});
