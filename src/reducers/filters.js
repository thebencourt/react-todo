import { FILTERS } from '../constants';
import {
  SET_FILTER,
  TOGGLE_ADD_MODAL,
} from '../actionTypes';

const initialState = {
  addModalActive: false,
  filter: FILTERS.SHOW_ALL,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    
    case TOGGLE_ADD_MODAL:
      return {
        ...state,
        addModalActive: !state.addModalActive,
      };
    
    default:
      return state;
  }
};

export default filters;