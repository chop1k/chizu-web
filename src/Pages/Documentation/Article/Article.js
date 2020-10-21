import React from "react"
import './Article.css'
import PropTypes from 'prop-types'
import Header from "../../../Components/Header/Header";
import Icon from "../../../Components/Icon/Icon";
import Icons from "../../../App/Icons";
import Text from "../../../Components/Text/Text";
import Image from "../../../Components/Image/Image";
import Admonition from "../../../Components/Admonition/Admonition";

function Article(props) {
    return (
        <div id="article">
            <div id="article-name">
                <Header text={props.name}/>
                <Icon icon={Icons.Edit} visible={props.canEdit}/>
            </div>
            <Header text={'Header text'}/>
            <Text text={'aaaah'}/>
            <Image url={'/favicon.ico'}/>
            <Admonition type={1} text={'text'} position={'center'}/>
        </div>
    )
}

Article.propTypes = {
    'content': PropTypes.string.isRequired,
    'name': PropTypes.string.isRequired,
    'canEdit': PropTypes.bool.isRequired
}

export default Article