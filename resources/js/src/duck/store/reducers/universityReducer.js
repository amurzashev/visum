import {
  UNIVERSITY_LOADING_SUCCESS,
  UNIVERSITY_LOADING_BEGIN,
  UNIVERSITY_LOADING_FAILURE,
  UNIVERSITY_RATING_POST_BEGIN,
  UNIVERSITY_RATING_POST_FAILURE,
  UNIVERSITY_RATING_POST_SUCCESS,
  UNIVERSITY_RATING_EDIT_BEGIN,
  UNIVERSITY_RATING_EDIT_SUCCESS,
  UNIVERSITY_RATING_EDIT_FAILURE,
  UNIVERSITY_RATING_DELETE_BEGIN,
  UNIVERSITY_RATING_DELETE_FAILURE,
  UNIVERSITY_RATING_DELETE_SUCCESS
} from '../../actions/types';

const initialState = {
  info: {},
  professors: [],
  isLoading: true,
  error: false,
  ratings: {
    isLoading: false,
    items: []
  }
};

function universityReducer(state = initialState, action) {
  switch (action.type) {
    case UNIVERSITY_LOADING_BEGIN:
      return { ...state, error: false, isLoading: true };
    case UNIVERSITY_LOADING_SUCCESS:
      return {
        ...state,
        info: action.payload.info,
        professors: action.payload.professors,
        ratings: {
          isLoading: false,
          items: action.payload.ratings
        },
        isLoading: false,
        error: false
      };
    case UNIVERSITY_LOADING_FAILURE:
      return { ...state, error: true, isLoading: false };
    case UNIVERSITY_RATING_POST_BEGIN:
      return {
        ...state,
        ratings: {
          isLoading: true,
          items: [
            action.payload,
            ...state.ratings.items
          ]
        }
      };
    case UNIVERSITY_RATING_POST_SUCCESS:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items]
        }
      };
    case UNIVERSITY_RATING_POST_FAILURE:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items.slice(1)]
        }
      };
    case UNIVERSITY_RATING_EDIT_BEGIN:
      return {
        ...state,
        ratings: {
          isLoading: true,
          items: [...state.ratings.items]
        }
      };
    case UNIVERSITY_RATING_EDIT_SUCCESS:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [
            action.payload,
            ...state.ratings.items.slice(1)
          ]
        }
      };
    case UNIVERSITY_RATING_EDIT_FAILURE:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items]
        }
      };
    case UNIVERSITY_RATING_DELETE_BEGIN:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items.slice(1)]
        }
      };
    case UNIVERSITY_RATING_DELETE_SUCCESS:
      return {
        ...state
      };
    case UNIVERSITY_RATING_DELETE_FAILURE:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [
            action.payload,
            ...state.ratings.items
          ]
        }
      };
    default:
      return state;
  }
}

export default universityReducer;
