import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { confirm } from '../../actions/auth';

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Content>
              <span>Validating your email</span>
            </Message.Content>
          </Message>
        )}

        {!loading &&
          success && (
            <Message icon>
              <Icon name="checkmark" success loading />
              <Message.Content>
                <span>Thank you. Your account has been verified.</span>
                <Link to="/dashboard">Go to your dashboard</Link>
              </Message.Content>
            </Message>
          )}
      </div>
    );
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(null, { confirm })(ConfirmationPage);
