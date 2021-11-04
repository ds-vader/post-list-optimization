import { SET_COMMENTS } from '../constants/ActionTypes';

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};

export default commentsReducer;
