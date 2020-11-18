import {
  USER_LOGIN,
  USER_LOGOUT,
  COUNT_PHOTO,
  DECOUNT_PHOTO,
  SET_USER_LOCATION,
} from '../constants/actionTypes';

export const getUserLogin = userData => {
  return {
    type: USER_LOGIN,
    data: userData,
  };
};

export const getUserLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const countPhoto = itemList => {
  return {
    type: COUNT_PHOTO,
    itemList,
  };
};

export const deCountPhoto = itemList => {
  return {
    type: DECOUNT_PHOTO,
    itemList,
  };
};

export const setUserLocation = coords => {
  return {
    type: SET_USER_LOCATION,
    coords,
  };
};
