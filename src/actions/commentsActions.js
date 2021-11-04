import { postsAPI } from '../api/api';
import { SET_COMMENTS } from '../constants/ActionTypes';

const setComments = (comments) => ({ type: SET_COMMENTS, comments });

const commentsReproduction = (arr) => {
  let t0 = performance.now();

  let commentsCopy = JSON.parse(JSON.stringify(arr));

  for (let i = 1; i <= 9; i++) {
    const initialComments = JSON.parse(JSON.stringify(arr));

    for (let j = 0; j < initialComments.length; j++) {
      initialComments[j].oldId = initialComments[j].id;
      initialComments[j].id = 500 * i + j + 1;
      initialComments[j].postId = 100 * i + Math.floor(j / 5) + 1;
    }
    commentsCopy = [].concat(commentsCopy, initialComments);
  }

  let t1 = performance.now();
  console.log('Creating of 5000 comments took ' + (t1 - t0) + ' milliseconds.');

  return commentsCopy;
};

export const getComments = () => {
  return (dispatch) => {
    postsAPI.getComments().then((data) => {
      dispatch(setComments(commentsReproduction(data)));
    });
  };
};
