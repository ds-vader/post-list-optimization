import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const postsAPI = {
  getPosts() {
    return instance.get('posts').then((response) => {
      return response.data;
    });
  },
  getComments() {
    return instance.get(`/comments`).then((response) => {
      return response.data;
    });
  },
};
