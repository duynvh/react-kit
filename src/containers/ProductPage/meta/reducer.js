import produce from 'immer';
import * as constants from "./constants";

export const initialState = {
  list: [],
  detail: null,
  isFetching: false,
  errorMessage: undefined,
};

/* eslint-disable no-param-reassign */
const Product = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.IS_FETCHING_PRODUCT:
        draft.isFetching = true;
        break;

      case constants.GET_LIST_SUCCESS:
        draft.list = action.payload.data;
        draft.isFetching = false;
        break;

      case constants.GET_LIST_ERROR:
        delete draft.list;
        draft.errorMessage = action.payload.eror;
        draft.isFetching = false;
        break;

      case constants.GET_DETAIL_SUCCESS:
        draft.detail = action.payload.data;
        draft.isFetching = false;
        break;

      case constants.GET_DETAIL_ERROR:
        delete draft.detail;
        draft.errorMessage = action.payload.eror;
        draft.isFetching = false;
        break;
        
      default:
        break;
    }
  }
);

export default Product;