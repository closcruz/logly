import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';


class Home extends Component{
    render() {
        return(
            <Router>
                <div>
                    <div className="navbar">
                        <ul>
                            <li><Link to="/user">User Test</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Home;