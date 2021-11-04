import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

const Post = ({ idx }) => {
  const { store } = useContext(ReactReduxContext);
  const { id, title, body } = store
    .getState()
    .postsPage.posts.find((item) => item.id === idx);

  const commentsArr = store
    .getState()
    .commentsPage.comments.filter((item) => item.postId === idx);

  const comments = commentsArr.map((item) => {
    const { id, name, email, body } = item;
    return (
      <div key={id} style={{ border: '1px dotted black', marginBottom: '5px' }}>
        <h4>{email}</h4>
        <h5>{name}</h5>
        <p>{body}</p>
      </div>
    );
  });
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <h3>Post id - {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <div style={{ marginTop: '40px' }}>{comments}</div>
    </div>
  );
};

export default React.memo(Post);
