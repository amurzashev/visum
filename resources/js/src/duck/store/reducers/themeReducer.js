import { THEME_SET_DARK, THEME_SET_LIGHT } from '../../actions/types';

const initialState = {
  mode: localStorage.getItem('theme') || 'light'
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case THEME_SET_DARK:
      localStorage.setItem('theme', 'dark');
      return { ...state, mode: 'dark' };
    case THEME_SET_LIGHT:
      localStorage.setItem('theme', 'light');
      return { ...state, mode: 'light' };
    default:
      return state;
  }
}

export default themeReducer;
