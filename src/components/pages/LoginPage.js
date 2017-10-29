import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

    submit = (data) => {
        console.log("submit: ", data);
        this.props.login(data).then(() => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        return (
            <div>
                <h1>LoginPage</h1>
                <LoginForm submit={this.submit}></LoginForm>
            </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, { login })(LoginPage);