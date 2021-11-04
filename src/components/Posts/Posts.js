import React, { Component } from 'react';

import PostList from './PostList';
import PostSearch from '../PostSearchComponent/PostSearch';

import { hardLoader } from '../../helpers/hardLoader';

class Posts extends Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    hardLoader(1000000);
  }
  onSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  };
  searchItems(items, searchTerm) {
    if (searchTerm.length === 0) {
      return items;
    }

    const inTitleSearch = items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    const inBodySearch = items.filter((item) => {
      return item.body.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    return []
      .concat(inTitleSearch, inBodySearch)
      .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
      .sort((a, b) => a.id - b.id);
  }

  removePostById = (id) => {
    this.props.removePost(id);
  };
  render() {
    const { searchTerm } = this.state;
    const { posts } = this.props;

    const visibleItems = this.searchItems(posts, searchTerm);
    return (
      <div
        style={{
          marginTop: '30px',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <PostSearch onSearchChange={this.onSearchChange} />
        <PostList items={visibleItems} removePostById={this.removePostById} />
      </div>
    );
  }
}

export default React.memo(Posts);
