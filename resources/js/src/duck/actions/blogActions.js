import { POSTS_LOADING_BEGIN, POSTS_LOADING_FAILURE, POSTS_LOADING_SUCCESS } from './types';
import apiRequest from './index';

const loadPosts = (skip, take = 2) => (
  function (dispatch) {
    dispatch({
      type: POSTS_LOADING_BEGIN
    });
    apiRequest(`blog?skip=${skip}&take=${take}`)
      .then((response) => {
        dispatch({
          type: POSTS_LOADING_SUCCESS,
          payload: response.data.posts
        });
      })
      .catch(() => {
        dispatch({
          type: POSTS_LOADING_FAILURE
        });
      });
  }
);

export { loadPosts };
