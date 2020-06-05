import { ResponseError } from '../common/api/common/ResponseError';
import Item from '../common/models/Item';
import { GlobalState } from '../rootReducer';

export const getItems = (state: GlobalState): Item[] => state.menu.items;
export const getPopularItems = (state: GlobalState): Item[] =>
  state.menu.popularItems;

export const getIsFetchingItems = (state: GlobalState): boolean =>
  state.menu.isFetchingItems;

export const getIsFetchingPopularItems = (state: GlobalState): boolean =>
  state.menu.isFetchingPopularItems;

export const getItemsError = (state: GlobalState): ResponseError | undefined =>
  state.menu.itemsError;

export const getPopularItemsError = (
  state: GlobalState
): ResponseError | undefined => state.menu.popularItemsError;
