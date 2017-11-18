import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { listPosts } from '../../actions/post';
import PageHeader from '../partials/PageHeader';
import PostList from './PostList';

class ListPostsPage extends Component {
  state = {
    data: {
      title: '',
      content: '',
    },
    posts: [],
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props.list().then((res) => {
      console.log('res', res);
      this.setState({
        posts: res.posts,
      });
    });
  }

  render() {
    const { posts } = this.state;
    const headers = ['Id', 'Title', 'User ID'];
    const footers = [1, 2, 3, 4, 5];
    return (
      <div>
        <PageHeader text="Post Listing" />
        <Link to="/dashboard/posts/new">Create new post ??</Link>
        <PostList headers={headers} records={posts} footers={footers} />
      </div>
    );
  }
}

ListPostsPage.propTypes = {
  list: PropTypes.func.isRequired,
};

export default connect(null, { list: listPosts })(ListPostsPage);
