import React from "react";
import style from './LoginPanel.css'

function LoginPanel() {
    return (
        <div id="login-panel" style={style}>
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

export default LoginPanel