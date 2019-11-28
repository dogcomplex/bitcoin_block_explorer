import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blocks from './reducers/blocks';

export default combineReducers({
  blocks,
  router: routerReducer
});
