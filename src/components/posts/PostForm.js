import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import api from '../../api';

import InlineError from '../messages/InlineError';
import BaseEventsForm from '../forms/BaseEventsForm';

class PostForm extends BaseEventsForm {
  state = {
    data: {
      title: '',
      content: '',
    },
    errors: {},
    loading: false,
  };

  componentDidMount() {
    console.log('componentDidMount', this.state);

    const id = this.props.postId;
    if (id) {
      api.post.find(this.props.postId).then(
        (res) => {
          console.log('res: ', res);
          this.setState({
            data: res.data,
          });
        },
        (err) => {
          console.log('err: ', err);
          this.setState({
            errors: err,
          });
        },
      );
    }
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps: ', this.props);
  }

  validate = (data) => {
    const errors = {};

    if (!data.title) {
      errors.title = "Can't be blank";
    }

    if (!data.content) {
      errors.content = "Can't be blank";
    }
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form size="large" onSubmit={this.onSubmit} loading={loading} noValidate="true">
        <Form.Field error={!!errors.title}>
          <Form.Input
            required
            id="title"
            name="title"
            label="Title"
            placeholder="Enter your title ..."
            value={data.title}
            onChange={this.onChange}
          />
          {errors.title && <InlineError text={errors.title} />}
        </Form.Field>

        <Form.Field error={!!errors.content}>
          <Form.TextArea
            required
            id="content"
            name="content"
            label="Content"
            placeholder="Enter your content ..."
            value={data.content}
            onChange={this.onChange}
          />
          {errors.content && <InlineError text={errors.content} />}
        </Form.Field>

        <Button.Group fluid>
          <Button content="Back" icon="left arrow" labelPosition="left" />
          <Button primary content="Save" icon="right arrow" labelPosition="right" />
        </Button.Group>
      </Form>
    );
  }
}

// PostForm.propTypes = {
//   post: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   }),
// };

export default connect(null, null)(PostForm);
