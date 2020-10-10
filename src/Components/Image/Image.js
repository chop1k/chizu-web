import React from "react"
import './Image.css'
import PropTypes from 'prop-types'

function Image(props) {
    return (
        <div className="image-wrapper">
            <img src={props.url} alt="image"/>
        </div>
    )
}

Image.propTypes = {
    'url': PropTypes.string.isRequired
}

export default Image