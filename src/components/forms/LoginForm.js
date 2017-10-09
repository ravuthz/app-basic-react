import React from 'react';
import { Form, Button } from 'semantic-ui-react';

import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    
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
        
        if (!data.email) {
            errors.email = "Can't be blank";
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
        console.clear();
        console.log("onChange: state", this.state.data);
    }
    
    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        
        console.clear();
        console.log("onSubmit: has errors");
        
        if (Object.keys(errors).length === 0) {
            console.log("onSubmit: no errors");
            this.props.submit(this.state.data);
        }
        
        console.log(this.state);
    }
    
    render() {
        
        const { data, errors } = this.state;
        
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="ravuthz@gmail.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="123123"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>    
        );
    }
    
}

export default LoginForm;