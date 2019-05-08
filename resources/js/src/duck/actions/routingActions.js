import { ROUTE_SET_LAST_LOCATION } from './types';

const setLastLocation = location => (
  function (dispatch) {
    dispatch({
      type: ROUTE_SET_LAST_LOCATION,
      payload: location
    });
  }
);

export default setLastLocation;
