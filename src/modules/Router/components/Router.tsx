import * as React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { Layout, ScrollToTop } from 'components';
import { createBrowserHistory } from 'history';
import { routes, AppRoute } from '../constants';

const history = createBrowserHistory();

export const Routing = () => (
  <Router history={history}>
    <ScrollToTop>
      <Layout>
        <Switch>
          {routes.map((route: AppRoute, index: number) => (
            <Route
              key={route.key ? route.key : index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Layout>
    </ScrollToTop>
  </Router>
);
