import React, { Component } from 'react';
import PropTypes from'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import ResetPasswordForm from '../forms/ResetPasswordForm';
import { validateToken, resetPassword } from '../../actions/auth';

class ResetPasswordPage extends Component {
    state = {
        loading: true,
        success: false
    };

    submit = (data) => {
        console.log("submit: ", data);
        return this.props.resetPassword(data).then(() =>
            this.props.history.push('/login'));
    }

    componentDidMount() {
        this.props.validateToken(this.props.match.params.token)
            .then(() => this.setState({ loading: false, success: true }))
            .catch(() => this.setState({ loading: false, success: false }));
    }

    render() {
        const { loading, success } = this.state;
        const token = this.props.match.params.token;

        return (
            <div>
                { loading && <Message>Loading</Message>}
                { !loading && success && <ResetPasswordForm submit={this.submit} token={token}></ResetPasswordForm> }
                { !loading && !success && <Message>Invalid Token</Message>}
            </div>
        );
    }
}

ResetPasswordPage.propTypes = {
    validateToken: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default connect(null, { validateToken, resetPassword })(ResetPasswordPage);
