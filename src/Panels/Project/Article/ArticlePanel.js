import React from "react"
import './ArticlePanel.css'
import PropTypes from 'prop-types'

function ArticlePanel(props) {
    return (
        <div className="article">
            <div className="article-name">
                <span>{props.name}</span>
            </div>
        </div>
    )
}

ArticlePanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'canEdit': PropTypes.bool.isRequired
}

export default ArticlePanel