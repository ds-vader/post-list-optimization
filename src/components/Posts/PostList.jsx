import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

import Preloader from '../Preloader/Preloader';
import useInfiniteScroll from './useInfiniteScroll';

import style from './PostList.module.css';

const nothingFound = (
  <span>Nothing Found – Sorry, but nothing matched your search criteria.</span>
);

const PostList = ({ items, removePostById }) => {
  const step = 15;
  const [listItems, setListItems] = useState(items.slice(0, step));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevListItems = usePrevious(items);

  useEffect(() => {
    if (prevListItems !== items) {
      setListItems(items.slice(0, step));
    }
  }, [prevListItems, items]);

  function fetchMoreListItems() {
    if (listItems.length === items.length) setIsFetching(false);
    //setTimeout(() => {
    setListItems((prevState) => [
      ...prevState,
      ...items.slice(prevState.length, prevState.length + step),
    ]);
    setIsFetching(false);
    //}, 1000);
  }

  const posts = listItems.map((item) => {
    const { id, title, body } = item;
    return (
      <ListGroup.Item
        className={style.listGroupItem}
        variant={'primary'}
        key={id}
      >
        <Link to={`/post/${id}`}>
          {id} - {title}
          <div>{body}</div>
        </Link>
        <Button variant={'danger'} onClick={() => removePostById(id)}>
          X
        </Button>
      </ListGroup.Item>
    );
  });
  return (
    <ListGroup
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {posts.length === 0 ? nothingFound : posts}
      {items.length !== posts.length && isFetching ? <Preloader /> : null}
    </ListGroup>
  );
};

export default React.memo(PostList);
