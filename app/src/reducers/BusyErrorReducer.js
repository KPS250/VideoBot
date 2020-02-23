import {ActionTypes} from '../../src/actions/ActionTypes';
import {initialState} from '../store/Store';

export const busyErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.toggleLoading:
      return Object.assign({}, state, {isLoading: !state.isLoading});
    case ActionTypes.toggleInternet:
      return Object.assign({}, state, {noInternet: !state.noInternet});
    case ActionTypes.toggleApiError:
      return Object.assign({}, state, {apiError: !state.apiError});
  }
  return state;
};
