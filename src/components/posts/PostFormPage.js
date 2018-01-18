import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postActions from '../../actions/post';
import PageHeader from '../partials/PageHeader';
import PostForm from './PostForm';

class PostFormPage extends Component {
  state = {
    post: {
      title: '',
      content: '',
    },
    title: 'Create new post',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.showPost(id).then((res) => {
        this.setState({ post: res.data, title: 'Modify existing post' });
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
        .then(() => this.props.history.push('/adminz/posts'));
    }
    return this.props
      .createPost(data)
      .then(() => this.props.history.push('/adminz/posts'));
  };

  render() {
    const { post, title } = this.state;
    console.log('this.props: ', this.props);
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
  showPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormPage);
