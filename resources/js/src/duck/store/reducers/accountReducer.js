import Cookies from 'js-cookie';
import {
  LOGIN_USER,
  SET_TOKEN,
  LOG_OUT,
  CONFIRM_TOKEN
} from '../../actions/types';

const token = Cookies.get('token') === undefined ? null : Cookies.get('token');
const initialState = {
  token,
  authenticated: false,
  id: null
};
function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
        authenticated: true
      };
    case SET_TOKEN:
      return { ...state, authenticated: true };
    case LOG_OUT:
      return {
        ...state,
        token: null,
        authenticated: false,
        id: null
      };
    case CONFIRM_TOKEN:
      return { ...state, authenticated: true };
    default:
      return state;
  }
}
export default accountReducer;
