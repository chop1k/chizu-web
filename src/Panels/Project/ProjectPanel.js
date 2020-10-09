import React from "react";
import './ProjectPanel.css'
import SectionPanel from "./Section/SectionPanel";
import BigLogoWithNameBanner from "./Banners/BigLogoWithName/BigLogoWithNameBanner";
import DefaultBanner from "./Banners/Default/DefaultBanner";
import Footer from "./Footer/Footer";
import NameBanner from "./Banners/Name/NameBanner";

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

// 1 = DefaultBanner
// 2 = BigLogoWithName
// 3 = NameBanner
const bannerType = 3;

function getBanner(props) {
    if (bannerType === 1)
    {
        return (
            <DefaultBanner url={props.url}/>
        )
    }

    if (bannerType === 2)
    {
        return (
            <BigLogoWithNameBanner url={props.url} name={props.name}/>
        )
    }

    if (bannerType === 3)
    {
        return (
            <NameBanner name={props.name}/>
        )
    }
}

function ProjectPanel() {


    return (
        <div id="project-panel">

            <div id="project-banner-wrapper">
                {getBanner({
                    'name': 'ProjectName'
                })}
            </div>
            <div id="project-search">
                <input type="text" placeholder="Search"/>
            </div>

            {
                sections.map((section, i) => {
                    return (
                        <SectionPanel key={i} section-id={section.id} name={section.name} articles={section.articles}/>
                    )
                })
            }
            
            <Footer/>
        </div>
    )
}

export default ProjectPanel