import { AxiosError } from 'axios';

import { GlobalState } from '../rootReducer';
import MenuItem from './models/MenuItem';

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
