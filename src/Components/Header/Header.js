import React from "react"
import './Header.css'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <div className="header">
            <div className="header-text">
                <span>{props.text}</span>
            </div>
        </div>
    )
}

Header.propTypes = {
    'text': PropTypes.string.isRequired
}

export default Header