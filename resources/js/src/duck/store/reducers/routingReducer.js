import { ROUTE_SET_LAST_LOCATION } from '../../actions/types';

const initialState = {
  lastLocation: null
};

function routingReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_SET_LAST_LOCATION:
      return { ...state, lastLocation: action.payload };
    default:
      return state;
  }
}

export default routingReducer;
