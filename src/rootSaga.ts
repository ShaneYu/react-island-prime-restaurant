import { all } from 'redux-saga/effects';

import { watchItemsRequest, watchPopularItemsRequest } from './menu/sagas';

export default function* rootSaga() {
  yield all([watchItemsRequest(), watchPopularItemsRequest()]);
}
