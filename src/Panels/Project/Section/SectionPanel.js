import React from "react";
import './SectionPanel.css'
import ArticlePanel from "../Article/ArticlePanel";
import PropTypes from 'prop-types'
import Icons from "../../../App/Icons";

function SectionPanel(props) {
    return (
        <div className="section">
            <div className="section-name">
                <div className="section-name-wrapper">
                    <span>{props.name}</span>
                </div>
                <div className="settings-wrapper" style={{'visibility': props.canEdit ? 'visible' : 'hidden'}}>
                    {Icons.Settings}
                </div>
            </div>
            {
                props.articles.map((article,i) => {
                    return (
                        <ArticlePanel key={i} name={article.name} canEdit={article.canEdit}/>
                    )
                })
            }
        </div>
    )
}

SectionPanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'canEdit': PropTypes.bool.isRequired,
    'articles': PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SectionPanel