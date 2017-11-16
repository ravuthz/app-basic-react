import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../../actions/post';

import PageHeader from '../partials/PageHeader';
import PostForm from './PostForm';

class NewPostPage extends Component {
  submit = data =>
    this.props.create(data).then(() => {
      this.props.history.push('/dashboard/posts');
    });

  render() {
    return (
      <div>
        <PageHeader text="Create new post" />
        <PostForm submit={this.submit} />
      </div>
    );
  }
}

NewPostPage.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { create: createPost })(NewPostPage);
