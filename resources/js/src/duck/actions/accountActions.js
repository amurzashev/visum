import Cookies from 'js-cookie';
import {
  LOGIN_USER,
  SET_TOKEN,
  CONFIRM_TOKEN,
  LOG_OUT
} from './types';
import apiRequest from './index';

const tryAuthUser = token => (
  function (dispatch) {
    apiRequest.post('user/token', {
      token
    })
      .then((response) => {
        if (response.data !== null) {
          const data = {
            token,
            id: response.data.uuid
          };
          dispatch({
            type: LOGIN_USER,
            payload: data
          });
        }
      })
      .catch(() => {
        Cookies.remove('token');
        dispatch({
          type: LOG_OUT
        });
      });
  }
);
const setToken = () => ({ type: SET_TOKEN });
const confirmToken = () => ({ type: CONFIRM_TOKEN });
const logOut = () => (
  function (dispatch) {
    Cookies.remove('token');
    dispatch({ type: LOG_OUT });
  }
);

export {
  tryAuthUser,
  setToken,
  confirmToken,
  logOut
};
