import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, removePost } from '../actions/postsActions';
import { getComments } from '../actions/commentsActions';
import { compose } from 'redux';

import Posts from '../components/Posts/Posts';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getComments();
  }

  render() {
    const { posts, comments, removePost } = this.props;
    return <Posts posts={posts} comments={comments} removePost={removePost} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    comments: state.commentsPage.comments,
  };
};

export default compose(
  connect(mapStateToProps, { getPosts, getComments, removePost })
)(PostsContainer);
