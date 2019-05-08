import { THEME_SET_DARK, THEME_SET_LIGHT } from './types';

export const setDark = () => (
  function (dispatch) {
    dispatch({
      type: THEME_SET_DARK
    });
  }
);

export const setLight = () => (
  function (dispatch) {
    dispatch({
      type: THEME_SET_LIGHT
    });
  }
);
