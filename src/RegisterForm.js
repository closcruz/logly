import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = props => (
    <form onSubmit={props.handleReg}>
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

RegisterForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    handleReg: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

RegisterForm.defaultProps = {
    username: '',
    password: '',
};

export default RegisterForm;