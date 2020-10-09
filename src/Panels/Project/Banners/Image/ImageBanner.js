import React from "react"
import './ImageBanner.css'
import PropTypes from 'prop-types'

function ImageBanner(props) {
    return (
        <div className="image-banner">
            <img src={props.url} alt="project-banner"/>
        </div>
    )
}

ImageBanner.propTypes = {
    'url': PropTypes.string.isRequired
}

export default ImageBanner