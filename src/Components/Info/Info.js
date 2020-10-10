import React from "react"
import './Info.css'
import PropTypes from 'prop-types'

function Info(props) {
    return (
        <div className="info-wrapper">
            <div className="info-text">
                <span>{props.text}</span>
            </div>
        </div>
    )
}

Info.propTypes = {
    'text': PropTypes.string.isRequired
}

export default Info