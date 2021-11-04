import { SET_POSTS, REMOVE_POST } from '../constants/ActionTypes';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case REMOVE_POST:
      const idx = state.posts.findIndex((item) => item.id === action.id);
      return {
        ...state,
        posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)],
      };
    default:
      return state;
  }
};

export default postsReducer;
