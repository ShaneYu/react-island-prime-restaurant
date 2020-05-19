import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import appReducer, { AppState } from './app/reducer';

export interface GlobalState {
  app: AppState;
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });

export default rootReducer;
