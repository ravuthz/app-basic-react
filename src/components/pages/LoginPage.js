import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
    
    submit = (data) => {
        console.log("submit: ", data);
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

export default LoginPage;