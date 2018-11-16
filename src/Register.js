import React, {Component} from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';


class RegisterBox extends Component{
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            error: null,
        };
    };

    handleChange = e => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleReg = e => {
        e.preventDefault();

        const {username, password} = this.state;
        if (!username || !password) return;
        axios.post('/auth/register', {username, password})
            .then(result => {
                this.props.history.push('/auth/login');
            });
    };

    render() {
        return(
            <div className="register">
                {this.state.error && <p>{this.state.error}</p>}
                <h2>Make an account</h2>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    handleReg={this.handleReg}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default RegisterBox;