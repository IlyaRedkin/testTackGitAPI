import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import Repositories from './app/pages/Repositories';
import UserList from './app/pages/UserList';
import Contributors from './app/pages/Contributors';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={UserList}/>
        <Route path=':userId' component={Repositories}/>
        <Route path=':userId/:userRepos' component={Contributors} />
    </Router>,
    app);