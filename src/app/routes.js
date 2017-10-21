import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Root from './containers/Root';

function Routing() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
      </Route>
    </Router>
  );
}

export default Routing;