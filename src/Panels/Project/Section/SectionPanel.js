import React from "react";
import './SectionPanel.css'
import ArticlePanel from "../Article/ArticlePanel";
import PropTypes from 'prop-types'
import Icons from "../../../App/Icons";
import Icon from "../../../Components/Icon/Icon";

function SectionPanel(props) {
    return (
        <div className="section">
            <div className="section-name">
                <div className="section-name-wrapper">
                    <span>{props.name}</span>
                </div>
                <Icon icon={Icons.Settings} visible={props.canEdit}/>
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