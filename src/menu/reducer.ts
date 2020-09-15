import { AxiosError } from 'axios';
import produce from 'immer';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import MenuCategory from './models/MenuCategory';
import MenuItem from './models/MenuItem';

export interface MenuState {
  isFetchingCategories: boolean;
  isFetchingItems: boolean;
  isFetchingPopularItems: boolean;
  categories: MenuCategory[];
  items: MenuItem[];
  popularItems: MenuItem[];
  categoriesError?: AxiosError | Error;
  itemsError?: AxiosError | Error;
  popularItemsError?: AxiosError | Error;
}

export const initialState: MenuState = {
  isFetchingCategories: false,
  isFetchingItems: false,
  isFetchingPopularItems: false,
  categories: [],
  items: [],
  popularItems: [],
};

const actionCreator = actionCreatorFactory('MENU');

export const menuActions = {
  fetchCategories: actionCreator.async<void, MenuCategory[], AxiosError | Error>(
    'FETCH_CATEGORIES'
  ),
  fetchItems: actionCreator.async<void, MenuItem[], AxiosError | Error>(
    'FETCH_ITEMS'
  ),
  fetchPopularItems: actionCreator.async<void, MenuItem[], AxiosError | Error>(
    'FETCH_POPULAR_ITEMS'
  ),
};

export default reducerWithInitialState(initialState)
  .case(menuActions.fetchCategories.started, (state) =>
    produce(state, (draft) => {
      draft.isFetchingCategories = true;
    })
  )
  .case(menuActions.fetchCategories.done, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingCategories = false;
      draft.categories = payload.result;
    })
  )
  .case(menuActions.fetchCategories.failed, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingCategories = false;
      draft.itemsError = payload.error;
    })
  )
  .case(menuActions.fetchItems.started, (state) =>
    produce(state, (draft) => {
      draft.isFetchingItems = true;
    })
  )
  .case(menuActions.fetchItems.done, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingItems = false;
      draft.items = payload.result;
    })
  )
  .case(menuActions.fetchItems.failed, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingItems = false;
      draft.itemsError = payload.error;
    })
  )
  .case(menuActions.fetchPopularItems.started, (state) =>
    produce(state, (draft) => {
      draft.isFetchingPopularItems = true;
    })
  )
  .case(menuActions.fetchPopularItems.done, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingPopularItems = false;
      draft.popularItems = payload.result;
    })
  )
  .case(menuActions.fetchPopularItems.failed, (state, payload) =>
    produce(state, (draft) => {
      draft.isFetchingPopularItems = false;
      draft.popularItemsError = payload.error;
    })
  );
