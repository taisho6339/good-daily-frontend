import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from "react-redux";
import Root from './containers/Root';
import AccountRegistration from './containers/AccountRegistration';
import { history, store } from "./redux/store.js";

function Routing() {
  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={Root}>
          <Route path="/registration" component={AccountRegistration} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Routing;