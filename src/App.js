import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import PostsContainer from './containers/PostsContainer';
import Navibar from './components/Navibar/Navibar';
import Post from './components/Post/Post';

export default function App() {
  const location = useLocation();
  const currentPostIdx = Number(location.pathname.split('/')[2]);
  return (
    <>
      <Navibar />
      <Route path="/posts">
        <PostsContainer />
      </Route>
      <Route path="/post/:id">
        <Post idx={currentPostIdx} />
      </Route>
    </>
  );
}
