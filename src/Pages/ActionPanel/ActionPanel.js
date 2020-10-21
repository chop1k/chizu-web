import React from "react"
import './ActionPanel.css'
import Icons from "../../App/Icons";
import Icon from "../../Components/Icon/Icon";
import PropTypes from 'prop-types'

function ActionPanel(props) {



    return (
        <div id="action-panel">
            <div className="action">
                <Icon icon={Icons.Visibility}/>
            </div>
        </div>
    )
}

ActionPanel.propTypes = {
    'mode': PropTypes.string.isRequired,
    'onModeChange': PropTypes.func.isRequired
}

export default ActionPanel