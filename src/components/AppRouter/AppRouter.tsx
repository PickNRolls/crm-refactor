import React, { FC } from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from '../../browserHistory';
import AppHeader from '../AppHeader';
import SubHeader from '../SubHeader';
import { RootRoute } from './routes';

const AppRouter: FC = () => {
  return (
    <Router history={history}>
      <Route path="/" component={AppHeader} />
      <Route path="/" component={SubHeader} />
      <Switch>
        <Route exact path="/" component={RootRoute} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
