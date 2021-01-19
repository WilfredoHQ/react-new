import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./auth";

export const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
