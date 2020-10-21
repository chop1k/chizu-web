import React from "react"
import './Icon.css'
import PropTypes from 'prop-types'

function Icon(props) {
    return (
        <div className="icon" style={{visibility: props.visible ? 'visible' : 'hidden'}} onClick={props.onClick}>
            {props.icon}
        </div>
    )
}

Icon.propTypes = {
    'icon': PropTypes.object.isRequired,
    'visible': PropTypes.bool.isRequired,
    'onClick': PropTypes.func
}

Icon.defaultProps = {
    'visible': true
}

export default Icon