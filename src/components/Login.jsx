import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

            return (
            <div className="login">
                 <Link to="/"><div className="card-background"></div></Link>
                <div className="login-window">
                    <h1>LOGIN</h1> <Link id="close-window-login" to="/"><span>Close Window</span></Link>
                    <span id="email">EMAIL</span><input type="text" className="email-input" placeholder=""></input>
                    <span id="password">PASSWORD</span><input type="text" className="password-input" placeholder=""></input>
                    <div className="btn-login">Enter</div>
                    <span id="forgot-password">Password forgotten ?</span>   
                </div>
            </div>
            )

    }

export default Login; 






        
