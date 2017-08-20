import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import UserList from './app/components/UserList';
import Repositories from './app/pages/Repositories';
import Layout from './app/layouts/Layout';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={UserList}/>
            <Route path="repositories" component={Repositories}/>
        </Route>
    </Router>,
app);