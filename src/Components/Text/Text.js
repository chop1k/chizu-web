import React from "react"
import './Text.css'
import PropTypes from 'prop-types'

function Text(props) {
    return (
        <div className="text">
            <span>{props.text}</span>
        </div>
    )
}

Text.propTypes = {
    'text': PropTypes.string.isRequired
}

export default Text