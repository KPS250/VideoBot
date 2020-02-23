import {combineReducers} from 'redux';
import {homeReducer} from './HomeReducer';
import {busyErrorReducer} from './BusyErrorReducer';

export const AppReducers = combineReducers({
  homeReducer,
  busyErrorReducer,
});
