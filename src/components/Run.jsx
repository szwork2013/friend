require('styles/App.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Common/App';
import Home from './Home/';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/'
});

function requireAuth(nextState, replace) {
    let next = nextState.location.pathname;
    next = next.replace('/', '');

}

ReactDOM.render((
    <Router history={ browserHistory }>

    <Route component={App} onEnter={requireAuth}>
        <Route path="/" component={Home.List} />
        <Route path="/home" component={Home.List}/>
    </Route>
    </Router>
    ), document.getElementById('app'));
