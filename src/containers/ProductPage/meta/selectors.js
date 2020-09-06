import { createSelector } from 'reselect'

const getProducts = state => state.products

export const selectList = createSelector(
  [getProducts],
  products => products.list
)

export const selectDetail = createSelector(
  [getProducts],
  products => products.detail
)

export const selectIsProductFetching = createSelector(
  [getProducts],
  products => products.isFetching
)
