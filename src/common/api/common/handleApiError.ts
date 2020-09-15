/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { toastr } from 'react-redux-toastr';
import { AnyAction } from 'redux';
import { put } from 'redux-saga/effects';

import isAxiosError from './isAxisorError';

export default function* handleApiError(
  error: any,
  failureAction?: (error?: any) => AnyAction
) {
  if (failureAction !== undefined) {
    yield put(failureAction(error));
    return;
  }

  if (isAxiosError<AxiosResponse>(error)) {
    if (error.response) {
      toastr.error(
        'API request failure',
        `A API request has failed with status code '${error.response.status}' and message '${error.response.statusText}'`
      );
    }
  }
}
