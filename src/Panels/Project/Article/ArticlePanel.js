import React from "react";
import './ArticlePanel.css'

function ArticlePanel(props) {
    return (
        <div className="article">
            <div className="article-name">
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default ArticlePanel