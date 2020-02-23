import {Urls} from '../values/Urls';
import instance from './AxiosInstance';
import {
  youtubeResults,
  toggleApiError,
  toggleInternet,
  toggleLoading,
} from '../../src/actions/Actions';
import {AppConfig} from '../../config/AppConfig';

export const getYoutubeSearchResults = query => {
  let data = {
    params: {
      key: AppConfig.googleApiKey,
      q: query,
      part: 'id',
      type: 'video',
      maxResults: 1,
    },
  };

  return dispatch => {
    dispatch(toggleLoading());
    instance
      .get(Urls.youtubeSearch, data)
      .then(res => {
        dispatch(youtubeResults(res.data.items[0].id.videoId));
        dispatch(toggleLoading());
      })
      .catch(error => {
        dispatch(errorHandler(error, 'getYoutubeSearchResults'));
      });
  };
};

export const errorHandler = (error, func) => {
  return dispatch => {
    console.log('errorHandler', func, error);
    dispatch(toggleLoading());
    if (!error.response) {
      // network error
      dispatch(toggleInternet());
    } else {
      dispatch(toggleApiError());
    }
  };
};
