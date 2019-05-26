import Cookies from 'js-cookie';
import {
  AXIOS_PHONE_BEGIN,
  AXIOS_PHONE_SUCCESS,
  AXIOS_PHONE_FAILURE,
  AXIOS_CODE_BEGIN,
  AXIOS_CODE_SUCCESS,
  AXIOS_CODE_FAILURE,
  LOGIN_USER,
  RESET_CODE_ERROR,
  ERROR_SHOW,
  RESET_AUTH
} from './types';
import apiRequest from './index';

const resetAuth = () => ({ type: RESET_AUTH });

const resetCodeError = () => ({ type: RESET_CODE_ERROR });

const phoneCheck = phone => (
  async function (dispatch) {
    dispatch({
      type: AXIOS_PHONE_BEGIN
    });
    try {
      await apiRequest.post('user', { phone });
      dispatch({
        type: AXIOS_PHONE_SUCCESS, payload: phone
      });
    } catch (error) {
      dispatch({
        type: AXIOS_PHONE_FAILURE
      });
      dispatch({
        type: ERROR_SHOW,
        payload: error.response.status
      });
    }
  });

const registerUser = (phone, code, history, lastLocation) => (
  function (dispatch) {
    dispatch({
      type: AXIOS_CODE_BEGIN
    });
    apiRequest.post('user/code', {
      phone,
      code
    })
      .then((response) => {
        const data = {
          token: response.data.token,
          id: response.data.id
        };
        console.log(response);
        Cookies.set('token', response.data.token, { expires: 7 });
        dispatch({
          type: AXIOS_CODE_SUCCESS
        });
        dispatch({
          type: LOGIN_USER,
          payload: data
        });
        if (lastLocation !== null) {
          history.replace(lastLocation);
        } else {
          history.replace('/');
        }
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW,
          payload: 1
        });
        dispatch({
          type: AXIOS_CODE_FAILURE
        });
      });
  }
);
export {
  phoneCheck,
  registerUser,
  resetCodeError,
  resetAuth
};
