import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Image, Card, Form, Button, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import logo from '../../logo.svg';
import BaseEventsForm from './BaseEventsForm';
import InlineError from '../messages/InlineError';
import GlobalErrorMessage from '../messages/GlobalErrorMessage';

class ForgotPasswordForm extends BaseEventsForm {
  state = {
    data: {
      email: 'ravuthz@gmail.com',
    },
    errors: {},
    loading: false,
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
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            <Image src={logo} /> Reset your password
          </Header>
          <Card primary fluid>
            <Card.Content>
              <Form size="large" onSubmit={this.onSubmit} loading={loading}>
                {errors.global && <GlobalErrorMessage errors />}
                <Form.Field error={!!errors.email}>
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ravuthz@gmail.com"
                    value={data.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Button.Group fluid>
                  <Button primary size="large">
                    Reset Password
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

export default ForgotPasswordForm;
