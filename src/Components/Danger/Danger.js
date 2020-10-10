import React from "react"
import './Danger.css'
import PropTypes from 'prop-types'

function Danger(props) {
    return (
        <div className="danger-wrapper">
            <div className="danger-text">
                <span>{props.text}</span>
            </div>
        </div>
    )
}

Danger.propTypes = {
    'text': PropTypes.string.isRequired
}

export default Danger