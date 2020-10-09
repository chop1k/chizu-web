import React from "react";
import './DefaultBanner.css'

function DefaultBanner(props) {
    return (
        <div className="default-banner">
            <img src={props.url} alt="project-banner"/>
        </div>
    )
}

export default DefaultBanner