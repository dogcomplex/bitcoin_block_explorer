import {
  BLOCK_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BLOCK_LOADED:
      console.log(action.payload);
      return {
        ...state.blocks,
        [action.hash]: {
          ...action.payload,
          isLoaded: true
        }
      };
    default:
      return state;
  }
};
