import {ActionTypes} from '../../src/actions/ActionTypes';
import {initialState} from '../store/Store';

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.youtubeResults:
      return Object.assign({}, state, {youtubeResults: action.payload});
  }
  return state;
};
