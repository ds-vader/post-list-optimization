import { postsAPI } from '../api/api';
import { SET_POSTS, REMOVE_POST } from '../constants/ActionTypes';

const setPosts = (posts) => ({ type: SET_POSTS, posts });

const removePostUnsafe = (id) => ({ type: REMOVE_POST, id });

const postsReproduction = (arr) => {
  let t0 = performance.now();

  let thousandPosts = JSON.parse(JSON.stringify(arr));

  for (let i = 1; i <= 9; i++) {
    const initialPosts = JSON.parse(JSON.stringify(arr));

    for (let j = 0; j < initialPosts.length; j++) {
      initialPosts[j].oldId = initialPosts[j].id;
      initialPosts[j].id = 100 * i + j + 1;
    }
    thousandPosts = [].concat(thousandPosts, initialPosts);
  }

  let t1 = performance.now();
  console.log('Creating of 1000 posts took ' + (t1 - t0) + ' milliseconds.');

  return thousandPosts;
};

export const getPosts = () => {
  return (dispatch) => {
    postsAPI.getPosts().then((data) => {
      dispatch(setPosts(postsReproduction(data)));
    });
  };
};

export const removePost = (id) => {
  return (dispatch) => {
    dispatch(removePostUnsafe(id));
  };
};
