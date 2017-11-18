import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { newPost, createPost, editPost, updatePost } from '../../actions/post';

import PageHeader from '../partials/PageHeader';
import PostForm from './PostForm';

class PostFormPage extends Component {
  state = {
    post: {
      title: '',
      content: '',
    },
    title: 'Create new post',
    loading: true,
    success: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.editPost(id).then((res) => {
        this.setState({ post: res.post, title: 'Modify existing post' });
      });
    } else {
      this.props.newPost();
    }
  }

  submit = (data) => {
    const { id } = this.props.match.params;
    if (id) {
      return this.props
        .updatePost(id, data)
        .then(() => this.props.history.push('/dashboard/posts'));
    }
    return this.props.createPost(data).then(() => this.props.history.push('/dashboard/posts'));
  };

  render() {
    const { post, title } = this.state;
    return (
      <div>
        <PageHeader text={title} />
        <PostForm post={post} submit={this.submit} />
      </div>
    );
  }
}

PostFormPage.propTypes = {
  newPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    post: state.post,
    errors: {},
  };
}

export default connect(mapStateToProps, {
  newPost,
  createPost,
  editPost,
  updatePost,
})(PostFormPage);
