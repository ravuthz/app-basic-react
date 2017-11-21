import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../forms/LoginForm';
import { token } from '../../actions/auth';

class LoginPage extends Component {
  submit = (data) => {
    console.log('data: ', data);
    return this.props
      .login({
        client_id: 'HVM5KD3195',
        client_secret: 'FBR6h8ZuWuJEcPfjeQytviz1RGUOfN',
        grant_type: 'password',
        username: data.email,
        password: data.password,
      })
      .then(() => this.props.history.push('/adminz'));
  };

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { login: token })(LoginPage);
