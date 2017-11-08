import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import InlineError from '../messages/InlineError';

class ForgotPasswordForm extends Component {
  state = {
    data: {
      email: 'ravuthz@gmail.com',
    },
    loading: false,
    errors: {},
  };

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
    console.log('onChange: state', this.state.data);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    console.log('onSubmit: has errors');

    if (Object.keys(errors).length === 0) {
      console.log('onSubmit: no errors');
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch((err) => {
        console.log('catch err: ', err);
        return this.setState({
          errors: err.response.data.errors,
          loading: false,
        });
      });
    }

    console.log(this.state);
  };

  validate = (data) => {
    const errors = {};

    if (!isEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ravuthz@gmail.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Button primary>Forgot Password</Button>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
