
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunk from "redux-thunk";
import tablesReducer from "./tableRedux";
import initialState from "./intialState";
import statusReducer from './optiosStatusRedux'

const subreducers = {
    tables: tablesReducer,
    status: statusReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

export default store;