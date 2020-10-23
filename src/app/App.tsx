import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../common/header/Header';
import ScrollToTop from '../common/scroll-to-top/ScrollToTop';
import Home from '../home/Home';
import OrderModal from '../order/OrderModal';
import PageNotFound from '../page-not-found/PageNotFound';

interface RouteInfo {
  path: string;
  name: string;
  component: React.FC;
  exact?: boolean;
}

const routes: RouteInfo[] = [
  { path: '/', name: 'Menu', component: Home, exact: true },
];

const App = () => {
  const location = useLocation();
  const [orderModalShow, setOrderModalShow] = useState(false);

  return (
    <>
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
      <Button type="button" variant="dark" onClick={() => setOrderModalShow(true)}>Show order</Button>{/* TODO: Move button as card icon to header navigation */}
      <OrderModal show={orderModalShow} onHide={() => setOrderModalShow(false)} />
    </>
  );
};

export default App;
