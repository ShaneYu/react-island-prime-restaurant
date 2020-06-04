import './styles/main.scss';
import 'isomorphic-fetch';

import { ConnectedRouter as Router } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';

import App from './app/App';
import { WaitingProvider } from './common/wait/WaitContext';
import configureStore, { history } from './configureStore';
import * as serviceWorker from './serviceWorker';

// Add ES6 Map support for redux-devtools-extension
// See: https://github.com/zalmoxisus/redux-devtools-extension/issues/124
if (process.env.NODE_ENV !== 'production') {
  require('map.prototype.tojson');
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <WaitingProvider>
      <Router history={history}>
        <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
          <App />
        </SkeletonTheme>
      </Router>
    </WaitingProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
