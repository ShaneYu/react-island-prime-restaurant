import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import configureStore, { history } from './configureStore';
import * as serviceWorker from './serviceWorker';
import { WaitingProvider } from './shared/wait/WaitContext';

// Add ES6 Map support for redux-devtools-extension
// See: https://github.com/zalmoxisus/redux-devtools-extension/issues/124
if (process.env.NODE_ENV !== 'production') {
  require('map.prototype.tojson');
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <WaitingProvider>
      <App history={history} />
    </WaitingProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
