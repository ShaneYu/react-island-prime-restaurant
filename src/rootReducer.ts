import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import appReducer, { AppState } from './app/reducer';
import menuReducer, { MenuState } from './menu/reducer';

export interface GlobalState {
  app: AppState;
  menu: MenuState;
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    menu: menuReducer,
    router: connectRouter(history),
  });

export default rootReducer;
