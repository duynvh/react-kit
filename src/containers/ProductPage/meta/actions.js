import * as constants from './constants';

export const getList = payload => ({
  type: constants.GET_LIST,
  payload
});

export const getDetail = payload => ({
  type: constants.GET_DETAIL,
  payload,
});

export const getListSuccess = payload => ({
  type: constants.GET_LIST_SUCCESS,
  payload,
});

export const getDetailSuccess = payload => ({
  type: constants.GET_DETAIL_SUCCESS,
  payload,
});

export const getListError = errorMessage  => ({
  type: constants.GET_LIST_ERROR,
  payload: errorMessage,
});

export const getDetailError = errorMessage  => ({
  type: constants.GET_DETAIL_ERROR,
  payload: errorMessage,
});