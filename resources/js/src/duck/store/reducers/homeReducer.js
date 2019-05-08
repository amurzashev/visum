import {
  CITIES_LOADING_BEGIN,
  CITIES_LOADING_SUCCESS,
  CITIES_LOADING_FAILURE,
  SELECT_CITY
} from '../../actions/types';

const initialState = {
  selectedCity: null,
  cities: {
    items: [],
    isLoading: false,
    error: null
  }
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CITIES_LOADING_BEGIN:
      return state;
    case CITIES_LOADING_SUCCESS:
      return {
        ...state,
        cities: {
          items: [...action.payload.cities],
          isLoading: false,
          error: false
        }
      };
    case CITIES_LOADING_FAILURE:
      return {
        ...state,
        selectedCity: null,
        cities: {
          error: true,
          isLoading: false
        }
      };
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };
    default:
      return state;
  }
}

export default homeReducer;
