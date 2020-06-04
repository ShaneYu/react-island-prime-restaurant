import { AnyAction } from 'redux';
import { put } from 'redux-saga/effects';

export default function* handleApiError(
  error: any,
  failureAction?: (error?: any) => AnyAction
) {
  const response = error.response;

  if (response !== undefined) {
    // TODO: When adding auth to this application, use `response.status === 401` and redirect to login page!
    return;
  }

  if (failureAction !== undefined) {
    yield put(failureAction());
  }
}
