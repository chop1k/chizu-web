import React from "react";
import './SectionPanel.css'
import ArticlePanel from "../Article/ArticlePanel";
import PropTypes from 'prop-types'

function SectionPanel(props) {
    return (
        <div className="section">
            <div className="section-name">
                <span>{props.name}</span>
            </div>
            {props.articles.map((article,i) => {
                return (
                    <ArticlePanel key={i} name={article.name}/>
                )
            })}
        </div>
    )
}

SectionPanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'articles': PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SectionPanel