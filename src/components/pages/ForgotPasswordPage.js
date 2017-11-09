import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { forgotPassword } from '../../actions/auth';

class ForgotPasswordPage extends Component {
  state = {
    success: false,
  };

  submit = data => this.props.forgotPassword(data).then(() => this.setState({ success: true }));

  render() {
    const { success } = this.state;
    return (
      <div>
        {success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
};

export default connect(null, { forgotPassword })(ForgotPasswordPage);
