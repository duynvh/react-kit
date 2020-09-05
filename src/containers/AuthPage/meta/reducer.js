import produce from 'immer';
import { getDataFromStorage } from 'utils/cookie';
import * as constants from "./constants";

const { token, user } = getDataFromStorage();

const getUser = userString => userString && JSON.parse(userString);

export const initialState = {
  token,
  user: getUser(user),
  isAuthenticated: !!token,
  isFetching: false,
  errorMessage: undefined,
};

/* eslint-disable no-param-reassign */
const Auth = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.IS_FETCHING_AUTH:
        draft.isFetching = true;
        break;

      case constants.SIGNIN_SUCCESS:
      case constants.SIGNUP_SUCCESS:
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.isFetching = false;
        draft.isAuthenticated = true;
        break;

      case constants.SIGNIN_ERROR:
      case constants.SIGNUP_ERROR:
      case constants.CHANGE_PASSWORD_ERROR:
      case constants.SEND_RESET_PASSWORD_ERROR:
        draft.isFetching = false;
        draft.errorMessage = action.payload.error;
        break;
        
      case constants.CHANGE_PASSWORD_SUCCESS:
      case constants.SEND_RESET_PASSWORD_SUCCESS:
        draft.isFetching = false;
        break;
      
      case constants.LOGOUT:
        delete draft.token;
        delete draft.user;
        draft.isAuthenticated = false;
        break;
        
      default:
        break;
    }
  }
);

export default Auth;