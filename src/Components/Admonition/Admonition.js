import React from "react"
import './Admonition.css'
import PropTypes from 'prop-types'

const types = {
    1: 'var(--blue-color)',
    2: 'var(--yellow-color)',
    3: 'var(--red-color)'
}

function Admonition(props) {
    return (
        <div className="admonition-wrapper">
            <div className="admonition" style={{borderColor: types[props.type]}}>
                <div className="admonition-text">
                    <span>{props.text}</span>
                </div>
            </div>
        </div>
    )
}

Admonition.propTypes = {
    'type': PropTypes.number.isRequired,
    'text': PropTypes.string.isRequired
}

Admonition.defaultProps = {
    'position': 'left'
}

export default Admonition