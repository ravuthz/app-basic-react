import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { listPosts } from '../../actions/post';
import PageHeader from '../partials/PageHeader';
import PostList from './PostList';

import Pagination from '../partials/Pagination';

class ListPostsPage extends Component {
  state = {
    data: {
      title: '',
      content: '',
    },
    posts: [],
    pager: {
      page: 1,
      perPage: 1,
      previousPage: 1,
      nextPage: 1,
      pageCount: 1,
      total: 1,
    },
    loading: true,
    success: false,
  };

  componentDidMount() {
    console.log('PostListPage mouted');
    this.props.list().then((res) => {
      console.log('res', res);
      this.setState({
        posts: res.data,
        pager: res.page,
      });
    });
  }

  render() {
    const { pager, posts } = this.state;
    const headers = ['Id', 'Title', 'User ID'];
    const footers = [1, 2, 3, 4, 5];
    return (
      <div>
        <PageHeader text="Post Listing" />
        <Link to="/dashboard/posts/new">Create new post ??</Link>
        <PostList headers={headers} records={posts} footers={footers} pager={pager} />
        <Pagination pager={pager} />
      </div>
    );
  }
}

ListPostsPage.propTypes = {
  list: PropTypes.func.isRequired,
};

export default connect(null, { list: listPosts })(ListPostsPage);
