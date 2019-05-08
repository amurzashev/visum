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
  ERROR_SHOW
} from './types';
import apiRequest from './index';

const fetchProfessorInfo = professorID => (
  function (dispatch) {
    dispatch({
      type: PROFESSOR_LOADING_BEGIN
    });
    apiRequest.get(`professor/${professorID}`)
      .then((response) => {
        dispatch({
          type: PROFESSOR_LOADING_SUCCESS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW
        });
        dispatch({
          type: PROFESSOR_LOADING_FAILURE
        });
      });
  }
);
const addProfessorRating = rating => (
  function (dispatch) {
    dispatch({
      type: PROFESSOR_RATING_POST_BEGIN,
      payload: rating
    });
    apiRequest.post('professor', {
      ...rating
    })
      .then(() => {
        dispatch({
          type: PROFESSOR_RATING_POST_SUCCESS
        });
      })
      .catch((err) => {
        dispatch({
          type: ERROR_SHOW,
          payload: err.response.status
        });
        dispatch({
          type: PROFESSOR_RATING_POST_FAILURE
        });
      });
  }
);

const editProfessorRating = rating => (
  function (dispatch) {
    dispatch({
      type: PROFESSOR_RATING_EDIT_BEGIN
    });
    apiRequest.post('professor', {
      ...rating
    })
      .then(() => {
        dispatch({
          type: PROFESSOR_RATING_EDIT_SUCCESS,
          payload: rating
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW
        });
        dispatch({
          type: PROFESSOR_RATING_EDIT_FAILURE
        });
      });
  }
);

const deleteProfessorRating = rating => (
  function (dispatch) {
    dispatch({
      type: PROFESSOR_RATING_DELETE_BEGIN
    });
    apiRequest.delete('professor', {
      data: {
        ...rating
      }
    })
      .then(() => {
        dispatch({
          type: PROFESSOR_RATING_DELETE_SUCCESS
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_SHOW
        });
        dispatch({
          type: PROFESSOR_RATING_DELETE_FAILURE,
          payload: rating
        });
      });
  }
);

export {
  fetchProfessorInfo,
  addProfessorRating,
  editProfessorRating,
  deleteProfessorRating
};
