import { AxiosError } from 'axios';

import { GlobalState } from '../rootReducer';
import MenuCategory from './models/MenuCategory';
import MenuItem from './models/MenuItem';

export const getCategories = (state: GlobalState): MenuCategory[] => state.menu.categories;
export const getItems = (state: GlobalState): MenuItem[] => state.menu.items;
export const getPopularItems = (state: GlobalState): MenuItem[] =>
  state.menu.popularItems;

export const getIsFetchingCategories = (state: GlobalState): boolean =>
  state.menu.isFetchingCategories;

export const getIsFetchingItems = (state: GlobalState): boolean =>
  state.menu.isFetchingItems;

export const getIsFetchingPopularItems = (state: GlobalState): boolean =>
  state.menu.isFetchingPopularItems;

export const getCategoriesError = (
  state: GlobalState
): AxiosError | Error | undefined => state.menu.categoriesError;

export const getItemsError = (
  state: GlobalState
): AxiosError | Error | undefined => state.menu.itemsError;

export const getPopularItemsError = (
  state: GlobalState
): AxiosError | Error | undefined => state.menu.popularItemsError;
