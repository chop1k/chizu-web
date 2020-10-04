import React from "react";
import './SectionPanel.css'
import ArticlePanel from "../Article/ArticlePanel";

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

export default SectionPanel