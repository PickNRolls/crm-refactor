import React, { FC } from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from 'browserHistory';
import AppHeader from 'components/AppHeader';
import SubHeader from 'components/SubHeader';
import { AuthRoute, RootRoute } from './routes';

const AppRouter: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={RootRoute} />
        <Route path="/auth" component={AuthRoute} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
