import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NotFoundPage } from './pages/errors';

const Home = lazy(() => import('./pages/home'));

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
}