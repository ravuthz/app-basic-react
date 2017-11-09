import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Header, Image, Card, Form, Button, Message } from 'semantic-ui-react';

import logo from '../../logo.svg';
import BaseEventsForm from './BaseEventsForm';
import InlineError from '../messages/InlineError';
import GlobalErrorMessage from '../messages/GlobalErrorMessage';

class ResetPasswordForm extends BaseEventsForm {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: '',
    },
    errors: {},
    loading: false,
  };

  validate = (data) => {
    const errors = {};

    if (!data.password) {
      errors.password = "Can't be blank";
    }

    if (data.password !== data.passwordConfirmation) {
      errors.password = 'Passwords must match';
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            <Image src={logo} /> Reset your password
          </Header>
          <Card primary fluid>
            <Card.Content>
              <Form size="large" onSubmit={this.onSubmit} loading={loading}>
                {errors.global && <GlobalErrorMessage errors />}
                <Form.Field error={!!errors.password}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    id="password"
                    type="email"
                    name="password"
                    placeholder="your new password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Form.Field error={!!errors.passwordConfirmation}>
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    placeholder="type it again, please"
                    value={data.passwordConfirmation}
                    onChange={this.onChange}
                  />
                  {errors.passwordConfirmation && (
                    <InlineError text={errors.passwordConfirmation} />
                  )}
                </Form.Field>
                <Button.Group fluid>
                  <Button primary size="large">
                    Save Password
                  </Button>
                </Button.Group>
              </Form>
              <Message>
                <Link to="/login">Go to Login.</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

ResetPasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
};

export default ResetPasswordForm;
