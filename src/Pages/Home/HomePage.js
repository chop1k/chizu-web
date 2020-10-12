import React from "react";
import Header from "../../Components/Header/Header";
import Text from "../../Components/Text/Text";
import './HomePage.css'
import Image from "../../Components/Image/Image";
import Admonition from "../../Components/Admonition/Admonition";

function HomePage() {
    return (
        <div id="home-page">
            <Header text={'Header text'}/>
            <Text text={'aaaah'}/>
            <Image url={'/favicon.ico'}/>
            <Admonition type={1} text={'text'} position={'center'}/>
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage