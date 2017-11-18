import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from '../forms/RegisterForm';
import { register } from '../../actions/auth';

class RegisterPage extends Component {
  submit = data =>
    this.props.register(data).then(() => {
      this.props.history.push('/adminz');
    });

  render() {
    return (
      <div>
        <RegisterForm submit={this.submit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { register })(RegisterPage);
