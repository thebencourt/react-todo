import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';

const appReducer = combineReducers({
  todos,
  filters,
});

export default (state, action) => {
  const nextState = { ...state };
  return appReducer(nextState, action);
};
