import { ERROR_HIDE, ERROR_SHOW } from '../../actions/types';

const initialState = {
  code: null,
  visible: false
};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_HIDE:
      return { ...state, code: null, visible: false };
    case ERROR_SHOW:
      return {
        ...state,
        code: action.payload,
        visible: true
      };
    default:
      return { ...state, code: null, visible: false };
  }
}

export default errorReducer;
