import { combineReducers } from 'redux';

var initialState = {
  number: 0,
  loading: false
}

var saga = ((state, action) => {
  if(action.type === 'LOADING') {
    return Object.assign({}, state, {loading: true});
  }
  if(action.type === 'SAGA_ACTION') {
    var number = state.number + 1;
    return Object.assign({}, state, {number: number, loading: false});
  }
  return state || initialState;
});

export default combineReducers({
  saga
});
