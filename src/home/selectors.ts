import { AxiosError } from 'axios';

import MenuItem from '../menu/models/MenuItem';
import { GlobalState } from '../rootReducer';

export const getItems = (state: GlobalState): MenuItem[] => state.menu.items;
export const getPopularItems = (state: GlobalState): MenuItem[] =>
  state.menu.popularItems;

export const getIsFetchingItems = (state: GlobalState): boolean =>
  state.menu.isFetchingItems;

export const getIsFetchingPopularItems = (state: GlobalState): boolean =>
  state.menu.isFetchingPopularItems;

export const getItemsError = (
  state: GlobalState
): AxiosError | Error | undefined => state.menu.itemsError;

export const getPopularItemsError = (
  state: GlobalState
): AxiosError | Error | undefined => state.menu.popularItemsError;
