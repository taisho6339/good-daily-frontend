import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { reducers } from "./reducers/index";

const middlewares = [
  routerMiddleware(browserHistory)
];

const middleware = applyMiddleware(...middlewares);
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };