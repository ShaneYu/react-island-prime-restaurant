import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../common/header/Header';
import ScrollToTop from '../common/scroll-to-top/ScrollToTop';
import Menu from '../menu/Menu';
import PageNotFound from '../page-not-found/PageNotFound';

interface RouteInfo {
  path: string;
  name: string;
  component: React.FC;
  exact?: boolean;
}

const routes: RouteInfo[] = [
  { path: '/', name: 'Menu', component: Menu, exact: true },
];

const App = () => {
  const location = useLocation();

  return (
    <ScrollToTop>
      <Header />
      <main>
        <Switch location={location}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </ScrollToTop>
  );
};

export default App;
