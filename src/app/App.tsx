import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../shared/header/Header';
import PageNotFound from '../shared/page-not-found/PageNotFound';
import ScrollToTop from '../shared/scroll-to-top/ScrollToTop';
import HomePage from './HomePage';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </ScrollToTop>
    </ConnectedRouter>
  );
};

export default App;
