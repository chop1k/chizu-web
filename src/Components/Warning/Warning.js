import React from "react"
import './Warning.css'
import PropTypes from 'prop-types'

function Warning(props) {
    return (
        <div className="warning-wrapper">
            <div className="warning-text">
                <span>{props.text}</span>
            </div>
        </div>
    )
}

Warning.propTypes = {
    'text': PropTypes.string.isRequired
}

export default Warning