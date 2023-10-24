import thunk from "redux-thunk";
import tablesReducer from "./tableRedux";

const subreducers = {
    tables: tablesReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__() 
  )
);

export default store;