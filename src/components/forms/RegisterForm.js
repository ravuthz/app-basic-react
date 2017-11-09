import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Image, Card, Form, Button, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import logo from '../../logo.svg';
import BaseEventsForm from './BaseEventsForm';
import InlineError from '../messages/InlineError';
import GlobalErrorMessage from '../messages/GlobalErrorMessage';

class RegisterForm extends BaseEventsForm {
  state = {
    data: {
      email: 'hello1@user.com',
      password: 'U53R@pass',
    },
    errors: {},
    loading: false,
  };

  validate = (data) => {
    const errors = {};

    if (!isEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.password) {
      errors.password = "Can't be blank";
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            <Image src={logo} /> Registeration form
          </Header>
          <Card primary fluid>
            <Card.Content>
              <Form size="large" onSubmit={this.onSubmit} loading={loading}>
                {errors.global && <GlobalErrorMessage errors />}
                <Form.Field error={!!errors.email}>
                  <Form.Input
                    icon="user"
                    type="email"
                    id="email"
                    name="email"
                    iconPosition="left"
                    placeholder="ravuthz@gmail.com"
                    value={data.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                  <Form.Input
                    icon="lock"
                    type="password"
                    id="password"
                    name="password"
                    iconPosition="left"
                    placeholder="123123"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button.Group fluid>
                  <Button primary size="large">
                    Register
                  </Button>
                </Button.Group>
              </Form>
              <Message>
                <Link to="/forgot_password">Are you forget your password ?&nbsp;</Link>
                <Link to="/login">Go to Login.</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegisterForm;
