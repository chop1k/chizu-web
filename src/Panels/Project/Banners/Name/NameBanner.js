import React from "react";
import './NameBanner.css'

function NameBanner(props) {
    return (
        <div className="banner-name">
            <span>{props.name}</span>
        </div>
    )
}

export default NameBanner