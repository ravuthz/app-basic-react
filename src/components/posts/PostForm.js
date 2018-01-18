import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
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

  componentWillReceiveProps(nextProp) {
    this.setState({
      data: nextProp.post,
    });
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
          <Button content="Back" icon="left arrow" labelPosition="left" as={Link} to="/adminz/posts" />
          <Button primary content="Save" icon="right arrow" labelPosition="right" />
        </Button.Group>
      </Form>
    );
  }
}

PostForm.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default PostForm;
