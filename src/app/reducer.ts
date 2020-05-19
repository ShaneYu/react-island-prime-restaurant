/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface AppState {}

export const initialState: AppState = {};

export default function reducer(
  state: AppState = initialState,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  action: any
): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
