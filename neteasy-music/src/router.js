import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Header from './routes/header/header';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
