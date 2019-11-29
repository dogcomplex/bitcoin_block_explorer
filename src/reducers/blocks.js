import {
  BLOCK_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BLOCK_LOADED:
      console.log('Block reloaded');
      return {
        ...state,
        [action.payload.hash]: {
          ...action.payload,
          isLoaded: true
        },
        [action.request]: { // e.g. updating latest/genesis
          ...action.payload,
          isLoaded: true
        }
      };
    default:
      return state;
  }
};
