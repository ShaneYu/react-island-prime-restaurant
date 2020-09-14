import axios, { AxiosResponse, CancelToken } from 'axios';

import MenuCategory from '../models/MenuCategory';
import MenuItem from '../models/MenuItem';

const GET_ITEM_CATEGORIES_URL = `${process.env.REACT_APP_API_BASE_URL}/item-categories`;
const GET_ITEMS_URL = `${process.env.REACT_APP_API_BASE_URL}/items`;
const GET_ITEMS_POPULAR_URL = `${process.env.REACT_APP_API_BASE_URL}/items/popular`;

export async function fetchCategories(
  cancelToken: CancelToken
): Promise<AxiosResponse<MenuCategory[]>> {
  return axios.get<MenuCategory[]>(GET_ITEM_CATEGORIES_URL, { cancelToken });
}

export async function fetchItems(
  cancelToken: CancelToken
): Promise<AxiosResponse<MenuItem[]>> {
  return axios.get<MenuItem[]>(GET_ITEMS_URL, { cancelToken });
}

export async function fetchPopularItems(
  cancelToken: CancelToken
): Promise<AxiosResponse<MenuItem[]>> {
  return axios.get<MenuItem[]>(GET_ITEMS_POPULAR_URL, { cancelToken });
}
