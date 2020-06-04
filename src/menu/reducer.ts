import produce from 'immer';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { ResponseError } from '../common/api/common/ResponseError';
import Item from '../common/models/Item';

export interface MenuState {
  isFetchingItems: boolean;
  isFetchingPopularItems: boolean;
  items: Item[];
  popularItems: Item[];
  itemsError?: ResponseError;
  popularItemsError?: ResponseError;
}

export const initialState: MenuState = {
  isFetchingItems: false,
  isFetchingPopularItems: false,
  items: [],
  popularItems: [],
};

const actionCreator = actionCreatorFactory('MENU');

export const menuActions = {
  fetchItems: actionCreator.async<void, Item[], ResponseError>('FETCH_ITEMS'),
  fetchPopularItems: actionCreator.async<void, Item[], ResponseError>(
    'FETCH_POPULAR_ITEMS'
  ),
};

export default reducerWithInitialState(initialState)
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
