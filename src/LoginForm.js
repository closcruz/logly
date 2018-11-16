import React from 'react';
import PropTypes from 'prop-types';


const LoginForm = (props) => (
    <form onSubmit={props.handleLogin}>
        <label>
            Username:
            <input
                type="text"
                name="username"
                value={props.username}
                onChange={props.handleChange}
            />
        </label>
        <label>
            Password:
            <input
                type="password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
            />
        </label>
        <button type="submit">Submit</button>
    </form>
);

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
    username: '',
    password: ''
};

export default LoginForm;
