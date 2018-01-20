import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import AccountRegistration from './containers/AccountRegistration/AccountRegistration';
import ArtistSearch from './containers/ArtistSearch/ArtistSearch';
import LiveList from './containers/LiveList/LiveList';
import { history, store } from './redux/store';

function Routing() {
  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={Root}>
          <Route path="registration" component={AccountRegistration} />
          <Route path="artistSearch" component={ArtistSearch} />
          <Route path="liveList/:artistId" component={LiveList} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Routing;
