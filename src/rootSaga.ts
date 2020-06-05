import { all } from 'redux-saga/effects';

import { watchItemsRequest, watchPopularItemsRequest } from './home/sagas';

export default function* rootSaga() {
  yield all([watchItemsRequest(), watchPopularItemsRequest()]);
}
