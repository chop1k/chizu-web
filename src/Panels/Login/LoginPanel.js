import React from "react";
import './LoginPanel.css'

function LoginPanel() {
    return (
        <div id="login-panel">
            <div className="input-wrapper">
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Password"/>
            </div>
            <div className="actions">
                <div className="button-wrapper">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

LoginPanel.propTypes = {}

export default LoginPanel