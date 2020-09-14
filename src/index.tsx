import './styles/main.scss';

import axios from 'axios';
import axiosRetry from 'axios-retry';
import { ConnectedRouter as Router } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import App from './app/App';
import { WaitingProvider } from './common/wait/WaitContext';
import configureStore, { history } from './configureStore';
import * as serviceWorker from './serviceWorker';

// Add ES6 Map support for redux-devtools-extension
// See: https://github.com/zalmoxisus/redux-devtools-extension/issues/124
if (process.env.NODE_ENV !== 'production') {
  require('map.prototype.tojson');
}

axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <WaitingProvider>
      <Router history={history}>
        <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
          <App />
        </SkeletonTheme>
      </Router>
      <ReduxToastr preventDuplicates progressBar closeOnToastrClick />
    </WaitingProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
