import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import InlineError from '../messages/InlineError';

class RegisterForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    validate = (data) => {
        const errors = {};

        if (!isEmail(data.email)) {
            errors.email = "Invalid email address";
        }

        if (!data.password) {
            errors.password = "Can't be blank";
        }

        return errors;
    }

    onChange = (e) => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        console.log("onChange: state", this.state.data);
    }

   onSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate(this.state.data);
        this.setState({ errors });

        console.log("onSubmit: has errors");

        if (Object.keys(errors).length === 0) {
            console.log("onSubmit: no errors");
            this.setState({ loading: true });
            this.props.submit(this.state.data);
            // .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    }

    render() {
        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        value={data.email}
                        onChange={this.onChange}/>
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">password</label>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="PassWord@123"
                        value={data.password}
                        onChange={this.onChange}/>
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Register</Button>
            </Form>
        );
    }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default RegisterForm;
