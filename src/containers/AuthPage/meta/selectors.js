import { createSelector } from 'reselect';

const getAuth = state => state.auth;

export const selectUser = createSelector(
  [getAuth],
  auth => auth.user
);

export const selectIsAuthFetching = createSelector(
  [getAuth],
  auth => auth.isFetching
);