import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { reducer as toastrReducer, ToastrState } from 'react-redux-toastr';
import { combineReducers } from 'redux';

import appReducer, { AppState } from './app/reducer';
import menuReducer, { MenuState } from './menu/reducer';

export interface GlobalState {
  app: AppState;
  menu: MenuState;
  toastr: ToastrState;
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    menu: menuReducer,
    toastr: toastrReducer,
    router: connectRouter(history),
  });

export default rootReducer;
