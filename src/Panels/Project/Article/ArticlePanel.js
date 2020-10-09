import React from "react"
import './ArticlePanel.css'
import PropTypes from 'prop-types'
import Icons from "../../../App/Icons";

function ArticlePanel(props) {
    return (
        <div className="article">
            <div className="article-name">
                <span>{props.name}</span>
            </div>
            <div className="settings-wrapper" style={{'visibility': props.canEdit ? 'visible' : 'hidden'}}>
                {Icons.Settings}
            </div>
        </div>
    )
}

ArticlePanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'canEdit': PropTypes.bool.isRequired
}

export default ArticlePanel