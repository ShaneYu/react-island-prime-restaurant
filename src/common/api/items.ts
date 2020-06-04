import Item from '../models/Item';
import getFetchInit from './common/getFetchInit';

export async function fetchItems(): Promise<Item[]> {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/items`,
      getFetchInit('GET')
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (err) {
    throw new Error(`Error occurred downstream: ${err}`);
  }
}

export async function fetchPopularItems(): Promise<Item[]> {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/items/popular`,
      getFetchInit('GET')
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (err) {
    throw new Error(`Error occurred downstream: ${err}`);
  }
}
