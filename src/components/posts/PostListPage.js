import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

// import { bindActionCreators } from 'redux';
import * as postActions from '../../actions/post';
import PageHeader from '../partials/PageHeader';
import PostList from './PostList';

// import Pagination from '../partials/Pagination';

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
    this.props.listPosts().then((res) => {
      console.log('componentDidMount res', res);
      this.setState({
        posts: res.data,
        pager: res.page,
      });
    });
  }

  onPageChange = (page) => {
    console.log('page: ', page);
  };

  render() {
    const { pager, posts } = this.state;
    const headers = ['Id', 'Title', 'User ID'];
    const footers = [1, 2, 3, 4, 5];
    return (
      <div>
        <PageHeader text="Post Listing" />
        <Button content="New Post" as={Link} to="/adminz/posts/new" />      
        <PostList headers={headers} records={posts} footers={footers} pager={pager} />
      </div>
    );
  }
}

ListPostsPage.propTypes = {
  listPosts: PropTypes.func.isRequired,
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(postActions, dispatch);
// }

// export default connect(null, mapDispatchToProps)(ListPostsPage);
export default connect(null, { listPosts: postActions.listPosts })(ListPostsPage);
