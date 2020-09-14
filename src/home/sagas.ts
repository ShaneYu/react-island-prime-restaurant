import axios from 'axios';
import { LOCATION_CHANGE } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';
import { call, cancel, cancelled, spawn, take } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';

import handleApiError from '../common/api/common/handleApiError';
import { fetchItems, fetchPopularItems } from '../menu/services/menuApi';
import { menuActions } from './reducer';

const fetchItemsWorker = bindAsyncAction(menuActions.fetchItems, {
  skipStartedAction: true,
})(function* (): SagaIterator {
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
});

const fetchPopularItemsWorker = bindAsyncAction(menuActions.fetchPopularItems, {
  skipStartedAction: true,
})(function* (): SagaIterator {
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
});

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
      const action: Action<void> = yield take(
        menuActions.fetchPopularItems.started
      );

      const worker = yield spawn(fetchPopularItemsWorker, action.payload);

      yield take(LOCATION_CHANGE);
      yield cancel(worker);
    } catch (error) { }
  }
}
