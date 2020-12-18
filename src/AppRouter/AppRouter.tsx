import React, { FC } from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from 'browserHistory';
import { AuthRoute, RootRoute } from './routes';
import Factors from './Factors';
import IssueRoute from './routes/IssueRoute';

const AppRouter: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={RootRoute} />
        <Route path="/auth" component={AuthRoute} />
        <Route path="/issue" component={IssueRoute} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
