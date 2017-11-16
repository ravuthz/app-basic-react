import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { findPost, updatePost } from '../../actions/post';

import PageHeader from '../partials/PageHeader';
import PostForm from './PostForm';

class EditPostPage extends Component {
  state = {
    post: {
      title: '',
      content: '',
    },
    success: false,
    loading: true,
  };

  componentDidMount() {
    console.log('props: ', this.props);
    const id = this.props.match.params.id;
    this.props.fetch(id).then(res => this.setState({ post: res.post }));
  }

  submit = (data) => {
    const id = this.props.match.params.id;
    this.props.update(id, data).then(() => this.props.history.push('/dashboard/posts'));
  };

  render() {
    const { post } = this.state;
    return (
      <div>
        <PageHeader text="Modify exists post" />
        <PostForm post={post} submit={this.submit} />
      </div>
    );
  }
}

EditPostPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  console.log('state: ', state);
  return { post: state.post };
}

export default connect(mapStateToProps, { fetch: findPost, update: updatePost })(EditPostPage);
