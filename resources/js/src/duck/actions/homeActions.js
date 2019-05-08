import {
  CITIES_LOADING_BEGIN,
  CITIES_LOADING_SUCCESS,
  CITIES_LOADING_FAILURE,
  SELECT_CITY
} from './types';
import apiRequest from './index';

const loadCities = () => (
  function (dispatch) {
    dispatch({
      type: CITIES_LOADING_BEGIN
    });
    apiRequest.get('cities')
      .then((response) => {
        dispatch({
          type: CITIES_LOADING_SUCCESS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: CITIES_LOADING_FAILURE
        });
      });
  }
);

const selectCity = cityID => (
  function (dispatch) {
    dispatch({
      type: SELECT_CITY,
      payload: cityID
    });
  }
);

export { loadCities, selectCity };
