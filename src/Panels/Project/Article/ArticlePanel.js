import React from "react"
import './ArticlePanel.css'
import PropTypes from 'prop-types'
import Icons from "../../../App/Icons";
import Icon from "../../../Components/Icon/Icon";

function ArticlePanel(props) {
    return (
        <div className="article">
            <div className="article-name">
                <span>{props.name}</span>
            </div>
            <Icon icon={Icons.Settings} visible={props.canEdit}/>
        </div>
    )
}

ArticlePanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'canEdit': PropTypes.bool.isRequired
}

export default ArticlePanel