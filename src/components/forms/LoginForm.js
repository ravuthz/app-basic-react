import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Image, Card, Form, Button, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import logo from '../../logo.svg';
import BaseEventsForm from './BaseEventsForm';
import InlineError from '../messages/InlineError';
import GlobalErrorMessage from '../messages/GlobalErrorMessage';

class LoginForm extends BaseEventsForm {
  state = {
    data: {
      email: 'adminz@gmail.com',
      password: 'password',
    },
    errors: {},
    loading: false,
  };

  // onSubmit = (e) => {
  //   e.preventDefault();

  //   const errors = this.validate(this.state.data);
  //   this.setState({ errors });

  //   if (Object.keys(errors).length === 0) {
  //     this.setState({ loading: true });
  // this.props.submit(this.state.data).then(
  //   () => {
  //     this.setState({
  //       errors: null,
  //       loading: false,
  //     });
  //   },
  //   (err) => {
  //     this.setState({
  //       errors: err.response.data.errors,
  //       loading: false,
  //     });
  //   },
  // );
  //   }
  // };

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
            <Image src={logo} /> Log-in to System
          </Header>
          <Card primary fluid>
            <Card.Content>
              <Form size="large" onSubmit={this.onSubmit} loading={loading}>
                {errors.global && <GlobalErrorMessage errors />}
                <Form.Field error={!!errors.email}>
                  <Form.Input
                    icon="user"
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
                <Form.Field error={!!errors.password}>
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="123123"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button.Group fluid>
                  <Button primary size="large">
                    Login
                  </Button>
                </Button.Group>
              </Form>
              <Message>
                <Link to="/forgot_password">Are you forget your password ?&nbsp;</Link>
                <Link to="/register">Go to Register.</Link>
              </Message>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
