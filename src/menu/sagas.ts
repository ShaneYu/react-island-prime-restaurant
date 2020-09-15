import axios from 'axios';
import { LOCATION_CHANGE } from 'connected-react-router';
import _ from 'lodash';
import { SagaIterator } from 'redux-saga';
import { call, cancel, cancelled, spawn, take } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';

import handleApiError from '../common/api/common/handleApiError';
import MenuCategory from './models/MenuCategory';
import { menuActions } from './reducer';
import {
    fetchCategories,
    fetchItems,
    fetchPopularItems
} from './services/menuApi';

const fetchCategoriesWorker = bindAsyncAction(menuActions.fetchCategories, {
  skipStartedAction: true,
})(function *fetchCategoriesSaga(): SagaIterator {
  const cancelSource = axios.CancelToken.source();

  try {
    const { data }: { data: MenuCategory[] } = yield call(fetchCategories, cancelSource.token);

    return _.orderBy(data || [], [(category) => category.order], ['asc']);
  } catch (error) {
    yield call(handleApiError, error);
  } finally {
    if (yield cancelled()) {
      yield call(cancelSource.cancel);
    }
  }

  return [];
});

const fetchItemsWorker = bindAsyncAction(menuActions.fetchItems, {
  skipStartedAction: true,
})(function *fetchItemsSaga(): SagaIterator {
  const cancelSource = axios.CancelToken.source();

  try {
    const { data } = yield call(fetchItems, cancelSource.token);

    return data;
  } catch (error) {
    yield call(handleApiError, error);
  } finally {
    if (yield cancelled()) {
      yield call(cancelSource.cancel);
    }
  }

  return [];
});

const fetchPopularItemsWorker = bindAsyncAction(menuActions.fetchPopularItems, {
  skipStartedAction: true,
})(function *fetchPopularItemsSaga(): SagaIterator {
  const cancelSource = axios.CancelToken.source();

  try {
    const { data } = yield call(fetchPopularItems, cancelSource.token);

    return data;
  } catch (error) {
    yield call(handleApiError, error);
  } finally {
    if (yield cancelled()) {
      yield call(cancelSource.cancel);
    }
  }

  return [];
});

export function* watchCategoriesRequest() {
  while (true) {
    const action: Action<void> = yield take(menuActions.fetchCategories.started);
    const worker = yield spawn(fetchCategoriesWorker, action.payload);

    yield take(LOCATION_CHANGE);
    yield cancel(worker);
  }
}

export function* watchItemsRequest() {
  while (true) {
    const action: Action<void> = yield take(menuActions.fetchItems.started);
    const worker = yield spawn(fetchItemsWorker, action.payload);

    yield take(LOCATION_CHANGE);
    yield cancel(worker);
  }
}

export function* watchPopularItemsRequest() {
  while (true) {
    try {
      const action: Action<void> = yield take(menuActions.fetchPopularItems.started);

      const worker = yield spawn(fetchPopularItemsWorker, action.payload);

      yield take(LOCATION_CHANGE);
      yield cancel(worker);
    } catch (error) {
      // Error does not need to be handled!
    }
  }
}
