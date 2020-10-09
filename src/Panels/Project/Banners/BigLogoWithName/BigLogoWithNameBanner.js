import React from "react";
import PropTypes from 'prop-types'
import './BigLogoWithNameBanner.css'

function BigLogoWithNameBanner(props) {
    return (
        <div className="banner-big-logo-with-name">
            <div className="banner-logo">
                <img src={props.url} alt="logo"/>
            </div>
            <div className="banner-name">
                <span>{props.name}</span>
            </div>
        </div>
    )
}

BigLogoWithNameBanner.propTypes = {
    'url': PropTypes.string.isRequired,
    'name': PropTypes.string.isRequired
}

export default BigLogoWithNameBanner