import React from "react"
import './Documentation.css'
import PropTypes from 'prop-types'
import Article from "./Article/Article";

function Documentation(props) {
    return (
        <div id="documentation">
            <Article content={''} name={'Article name'} canEdit={true}/>
        </div>
    )
}

Documentation.propTypes = {
    'mode': PropTypes.string.isRequired
}

Documentation.defaultProps = {

}

export default Documentation