import React from "react";
import './NameBanner.css'
import PropTypes from 'prop-types'

function NameBanner(props) {
    return (
        <div className="banner-name">
            <span>{props.name}</span>
        </div>
    )
}

NameBanner.propTypes = {
    'name': PropTypes.string.isRequired
}

export default NameBanner