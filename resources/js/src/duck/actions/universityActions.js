import {
  UNIVERSITY_LOADING_SUCCESS,
  UNIVERSITY_LOADING_FAILURE,
  UNIVERSITY_LOADING_BEGIN,
  UNIVERSITY_RATING_POST_BEGIN,
  UNIVERSITY_RATING_POST_FAILURE,
  UNIVERSITY_RATING_POST_SUCCESS,
  UNIVERSITY_RATING_EDIT_BEGIN,
  UNIVERSITY_RATING_EDIT_FAILURE,
  UNIVERSITY_RATING_EDIT_SUCCESS,
  UNIVERSITY_RATING_DELETE_BEGIN,
  UNIVERSITY_RATING_DELETE_FAILURE,
  UNIVERSITY_RATING_DELETE_SUCCESS,
  ERROR_SHOW
} from './types';
import apiRequest from './index';

const fetchUniversityInfo = universityID => (
  function (dispatch) {
    dispatch({
      type: UNIVERSITY_LOADING_BEGIN
    });
    apiRequest.get(`university/${universityID}`)
      .then((response) => {
        const { info, professors, ratings } = response.data;
        dispatch({
          type: UNIVERSITY_LOADING_SUCCESS,
          payload: {
            info,
            professors,
            ratings
          }
        });
      })
      .catch(() => {
        dispatch({
          type: UNIVERSITY_LOADING_FAILURE
        });
      });
  }
);

const addUniversityRating = rating => (
  function (dispatch) {
    dispatch({
      type: UNIVERSITY_RATING_POST_BEGIN,
      payload: rating
    });
    apiRequest.post('university', {
      ...rating
    })
      .then(() => {
        dispatch({
          type: UNIVERSITY_RATING_POST_SUCCESS
        });
      })
      .catch((err) => {
        dispatch({
          type: ERROR_SHOW,
          payload: err.response.status
        });
        dispatch({
          type: UNIVERSITY_RATING_POST_FAILURE
        });
      });
  }
);

const editUniversityRating = rating => (
  function (dispatch) {
    dispatch({
      type: UNIVERSITY_RATING_EDIT_BEGIN
    });
    apiRequest.post('university', {
      ...rating
    })
      .then(() => {
        dispatch({
          type: UNIVERSITY_RATING_EDIT_SUCCESS,
          payload: rating
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW
        });
        dispatch({
          type: UNIVERSITY_RATING_EDIT_FAILURE
        });
      });
  }
);

const deleteUniversityRating = rating => (
  function (dispatch) {
    dispatch({
      type: UNIVERSITY_RATING_DELETE_BEGIN
    });
    apiRequest.delete('university', {
      data: {
        ...rating
      }
    })
      .then(() => {
        dispatch({
          type: UNIVERSITY_RATING_DELETE_SUCCESS
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW
        });
        dispatch({
          type: UNIVERSITY_RATING_DELETE_FAILURE,
          payload: rating
        });
      });
  }
);

export {
  fetchUniversityInfo,
  addUniversityRating,
  editUniversityRating,
  deleteUniversityRating
};
