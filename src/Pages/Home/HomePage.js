import React from "react";
import Header from "../../Components/Header/Header";
import Info from "../../Components/Info/Info";
import Text from "../../Components/Text/Text";
import Warning from "../../Components/Warning/Warning";
import './HomePage.css'
import Danger from "../../Components/Danger/Danger";
import Image from "../../Components/Image/Image";

function HomePage() {
    return (
        <div id="home-page">
            <Header text={'Header text'}/>
            <Info text={'info text'}/>
            <Text text={'aaaah'}/>
            <Image url={'/favicon.ico'}/>
            <Warning text={'warning text'}/>
            <Danger text={'danger text'}/>
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage