import axios, { AxiosResponse, CancelToken } from 'axios';

import MenuItem from '../models/MenuItem';

export async function fetchItems(
  cancelToken: CancelToken
): Promise<AxiosResponse<MenuItem[]>> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/items`;
  return axios.get<MenuItem[]>(url, { cancelToken });
}

export async function fetchPopularItems(
  cancelToken: CancelToken
): Promise<AxiosResponse<MenuItem[]>> {
  const url = `${process.env.REACT_APP_API_BASE_URL}/items/popular`;
  return axios.get<MenuItem[]>(url, { cancelToken });
}
