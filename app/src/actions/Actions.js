import {ActionTypes} from './ActionTypes';

export const youtubeResults = payload => ({
  type: ActionTypes.youtubeResults,
  payload: payload,
});

export const toggleInternet = payload => ({
  type: ActionTypes.toggleInternet,
  payload: payload,
});

export const toggleApiError = payload => ({
  type: ActionTypes.toggleApiError,
  payload: payload,
});

export const toggleLoading = payload => ({
  type: ActionTypes.toggleLoading,
  payload: payload,
});
