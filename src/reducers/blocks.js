import {
  BLOCK_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BLOCK_LOADED:
      return {
        ...state,
        [action.payload.hash]: {
          ...action.payload,
          isLoaded: true
        },
        [action.request]: { 
          // used for setting the genesis or latest block
          ...action.payload,
          isLoaded: true
        }
      };
    default:
      return state;
  }
};
