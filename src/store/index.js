import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import comment from "./reducers/comment";
import ReduxThunk from 'redux-thunk';

const reducer = combineReducers({ comment });

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(ReduxThunk))
    : composeWithDevTools(applyMiddleware(ReduxThunk, logger));

const store = createStore(reducer, enhancer);

export default store;
