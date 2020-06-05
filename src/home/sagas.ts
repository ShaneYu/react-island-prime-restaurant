import { SagaIterator } from 'redux-saga';
import { call, delay, spawn, take } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';

import handleApiError from '../common/api/common/handleApiError';
import { fetchItems, fetchPopularItems } from '../common/api/items';
import Item from '../common/models/Item';
import { menuActions } from './reducer';

const fetchItemsWorker = bindAsyncAction(menuActions.fetchItems, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  try {
    const items: Item[] = yield call(fetchItems);

    yield delay(5000); // TODO: Remove this; being used to simulate slow fetch (for demoing skeleton loading placeholders)

    return items;
  } catch (error) {
    yield call(handleApiError, error);

    throw error;
  }
});

const fetchPopularItemsWorker = bindAsyncAction(menuActions.fetchPopularItems, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  try {
    const items: Item[] = yield call(fetchPopularItems);

    yield delay(5000); // TODO: Remove this; being used to simulate slow fetch (for demoing skeleton loading placeholders)

    return items;
  } catch (error) {
    yield call(handleApiError, error);

    throw error;
  }
});

export function* watchItemsRequest() {
  while (true) {
    const action: Action<void> = yield take(menuActions.fetchItems.started);

    yield spawn(fetchItemsWorker, action.payload);
  }
}

export function* watchPopularItemsRequest() {
  while (true) {
    const action: Action<void> = yield take(
      menuActions.fetchPopularItems.started
    );

    yield spawn(fetchPopularItemsWorker, action.payload);
  }
}
