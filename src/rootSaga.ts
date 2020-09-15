import { all } from 'redux-saga/effects';

import { watchCategoriesRequest, watchItemsRequest, watchPopularItemsRequest } from './menu/sagas';

export default function* rootSaga() {
  yield all([watchCategoriesRequest(), watchItemsRequest(), watchPopularItemsRequest()]);
}
