import {AppReducers} from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}

export const store = createStore(rootReducer, applyMiddleware(thunk));