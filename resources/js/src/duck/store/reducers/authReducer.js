import {
  AXIOS_PHONE_BEGIN,
  AXIOS_PHONE_SUCCESS,
  AXIOS_PHONE_FAILURE,
  RESET_AUTH,
  AXIOS_CODE_BEGIN,
  AXIOS_CODE_SUCCESS,
  AXIOS_CODE_FAILURE,
  RESET_CODE_ERROR
} from '../../actions/types';

const initialState = {
  phone: {
    loading: false,
    error: null
  },
  code: {
    loading: false,
    error: null
  },
  account: {
    phone: ''
  }
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case AXIOS_PHONE_BEGIN:
      return { ...state, phone: { loading: true, error: false } };
    case AXIOS_PHONE_SUCCESS:
      return {
        ...state, phone: { loading: false, error: false }, account: { phone: action.payload }
      };
    case AXIOS_PHONE_FAILURE:
      return { ...state, phone: { loading: false, error: true } };
    case RESET_AUTH:
      return { ...state, ...initialState };
    case AXIOS_CODE_BEGIN:
      return { ...state, code: { loading: true, error: false } };
    case AXIOS_CODE_SUCCESS:
      return {
        ...state,
        code: { loading: false, error: null },
        phone: { loading: false, error: null },
        account: { phone: '' }
      };
    case AXIOS_CODE_FAILURE:
      return { ...state, code: { loading: false, error: true } };
    case RESET_CODE_ERROR:
      return { ...state, code: { loading: false, error: null } };
    default:
      return state;
  }
}
export default authReducer;
