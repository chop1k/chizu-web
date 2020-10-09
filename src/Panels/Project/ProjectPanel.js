import React from "react";
import './ProjectPanel.css'
import SectionPanel from "./Section/SectionPanel";
import BigLogoWithNameBanner from "./Banners/BigLogoWithName/BigLogoWithNameBanner";
import ImageBanner from "./Banners/Image/ImageBanner";
import Footer from "./Footer/Footer";
import NameBanner from "./Banners/Name/NameBanner";
import PropTypes from 'prop-types'

function ProjectPanel(props) {

    let banner = (
        <BigLogoWithNameBanner url={props.url} name={props.name}/>
    )

    if (props.bannerType === 1) {
        banner = (
            <ImageBanner url={props.url}/>
        )
    }

    if (props.bannerType === 3) {
        banner = (
            <NameBanner name={props.name}/>
        )
    }

    return (
        <div id="project-panel">

            <div id="project-banner-wrapper">
                {banner}
            </div>

            <div id="project-search">
                <input type="text" placeholder="Search"/>
            </div>

            {
                props.sections.map((section, i) => {
                    return (
                        <SectionPanel key={i} name={section.name} articles={section.articles}/>
                    )
                })
            }
            
            <Footer/>
        </div>
    )
}

ProjectPanel.propTypes = {
    'name': PropTypes.string.isRequired,
    'bannerType': PropTypes.number.isRequired,
    'sections': PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectPanel