import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitSignin(e) {}

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Signin
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        className="login-input" 
                        placeholder="Username"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="text" 
                        name="password" 
                        className="input-type" 
                        placeholder="Password" 
                        />
                    </div>

                    <button 
                    type="button" 
                    className="signin-btn" 
                    onClick={this
                    .submitSignin
                    .bind(this)}>Signin</button>

                </div>
            </div>
        );
    }
}

export default Signin;