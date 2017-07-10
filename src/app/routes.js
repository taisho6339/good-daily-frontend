import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Root from './containers/Root/Root';

function Routing() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Root}/>
        </Router>
    );
}

export default Routing;