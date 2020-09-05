import { createSelector } from 'reselect';

const selectRaw = state => state.auth;

export const selectUser = createSelector(
  [selectRaw],
  auth => auth.user
);

export const selectIsAuthFetching = createSelector(
  [selectRaw],
  auth => auth.isFetching
);

export const selectAuthErrorMessage = createSelector(
  [selectRaw], 
  auth => auth.errorMessage
);