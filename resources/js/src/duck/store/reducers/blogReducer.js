import { POSTS_LOADING_BEGIN, POSTS_LOADING_FAILURE, POSTS_LOADING_SUCCESS } from '../../actions/types';

const initialState = {
  posts: {
    isLoading: true,
    error: false,
    items: []
  },
  post: {
    isLoading: true,
    error: false,
    item: {}
  }
};

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_LOADING_BEGIN:
      return { ...state, posts: { isLoading: true, error: false, items: [] } };
    case POSTS_LOADING_SUCCESS:
      return {
        ...state,
        posts: { isLoading: false, error: false, items: [...state.posts.items, ...action.payload] }
      };
    case POSTS_LOADING_FAILURE:
      return { ...state, posts: { isLoading: false, erro: true, items: [] } };
    default:
      return state;
  }
}
export default blogReducer;
