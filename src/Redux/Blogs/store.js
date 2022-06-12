import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducer";

const rootreducer = combineReducers({
  blogs: blogReducer
});
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
