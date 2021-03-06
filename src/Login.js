import React, {Component} from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

class LoginBox extends Component{
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            error: null
        }
    };

    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleLogin = e => {
        e.preventDefault();

        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
            .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                this.props.history.push('/')
            })
            .catch((error => {
                if (error.response.status === 401) {
                    this.setState({error: 'Log in failed. Username or password does not match'});
                }
            }));
    };

    render() {
        return (
            <div className="login">
                {this.state.error && <p>{this.state.error}</p>}
                <h2>Log In</h2>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin}
                />
            </div>
        );
    }
}

export default LoginBox;