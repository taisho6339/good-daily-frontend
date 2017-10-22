import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducers from './reducers/index';

const middlewares = [
  routerMiddleware(browserHistory),
];

let middleware = applyMiddleware(...middlewares);
// Chrome拡張のReduxDevToolでDebugを行うための設定
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
