import {
  BLOCK_LOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BLOCK_LOADED:
      return {
        ...state,
        blocks: {
            ...state.blocks,
            [action.payload.block.hash]: action.payload.block
        }
      };
    default:
      return state;
  }
};
