import { ERROR_HIDE, ERROR_SHOW } from './types';

const setError = code => (
  function (dispatch) {
    dispatch({
      type: ERROR_SHOW,
      payload: code
    });
  }
);

const hideError = () => (
  function (dispatch) {
    dispatch({
      type: ERROR_HIDE
    });
  }
);

export { setError, hideError };
