import React from "react";
import './ProjectPanel.css'
import SectionPanel from "./Section/SectionPanel";

const sections = [
    {
        'id': 1,
        'name': 'sectionName',
        'articles': [
            {
                'id': 1,
                'name': 'articleName'
            },
            {
                'id': 2,
                'name': 'articleName'
            },
            {
                'id': 3,
                'name': 'articleName'
            }
        ]
    },
    {
        'id': 2,
        'name': 'sectionName',
        'articles': [
            {
                'id': 1,
                'name': 'articleName'
            },
            {
                'id': 2,
                'name': 'articleName'
            },
            {
                'id': 3,
                'name': 'articleName'
            }
        ]
    },
    {
        'id': 2,
        'name': 'sectionName',
        'articles': [
            {
                'id': 1,
                'name': 'articleName'
            },
            {
                'id': 2,
                'name': 'articleName'
            },
            {
                'id': 3,
                'name': 'articleName'
            }
        ]
    },
]

function ProjectPanel() {
    return (
        <div id="project-panel">
            {/*<div id="project-icon-wrapper">*/}

            {/*</div>*/}
            <div id="project-search">
                <input type="text" placeholder="Search"/>
            </div>
            {sections.map((section, i) => {
                return (
                    <SectionPanel key={i} section-id={section.id} name={section.name} articles={section.articles}/>
                )
            })}
        </div>
    )
}

export default ProjectPanel