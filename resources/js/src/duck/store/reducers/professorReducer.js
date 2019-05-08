import {
  PROFESSOR_LOADING_BEGIN,
  PROFESSOR_LOADING_FAILURE,
  PROFESSOR_LOADING_SUCCESS,
  PROFESSOR_RATING_POST_BEGIN,
  PROFESSOR_RATING_POST_FAILURE,
  PROFESSOR_RATING_POST_SUCCESS,
  PROFESSOR_RATING_EDIT_BEGIN,
  PROFESSOR_RATING_EDIT_FAILURE,
  PROFESSOR_RATING_EDIT_SUCCESS,
  PROFESSOR_RATING_DELETE_BEGIN,
  PROFESSOR_RATING_DELETE_FAILURE,
  PROFESSOR_RATING_DELETE_SUCCESS,
} from '../../actions/types';

const initialState = {
  info: {},
  isLoading: true,
  error: false,
  ratings: {
    isLoading: false,
    items: []
  }
};

function professorReducer(state = initialState, action) {
  switch (action.type) {
    case PROFESSOR_LOADING_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case PROFESSOR_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload.info,
        ratings: {
          isLoading: false,
          items: action.payload.ratings
        }
      };
    case PROFESSOR_LOADING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case PROFESSOR_RATING_POST_BEGIN:
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
    case PROFESSOR_RATING_POST_SUCCESS:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items]
        }
      };
    case PROFESSOR_RATING_POST_FAILURE:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items.slice(1)]
        }
      };
    case PROFESSOR_RATING_EDIT_BEGIN:
      return {
        ...state,
        ratings: {
          isLoading: true,
          items: [...state.ratings.items]
        }
      };
    case PROFESSOR_RATING_EDIT_SUCCESS:
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
    case PROFESSOR_RATING_EDIT_FAILURE:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items]
        }
      };
    case PROFESSOR_RATING_DELETE_BEGIN:
      return {
        ...state,
        ratings: {
          isLoading: false,
          items: [...state.ratings.items.slice(1)]
        }
      };
    case PROFESSOR_RATING_DELETE_SUCCESS:
      return {
        ...state
      };
    case PROFESSOR_RATING_DELETE_FAILURE:
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

export default professorReducer;
