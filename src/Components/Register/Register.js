import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {} 

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        className="login-input" 
                        placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        className="login-input" 
                        placeholder="Email"/>
                    </div>

                </div>
            </div>
        );
    }
}