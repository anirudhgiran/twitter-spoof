import React from 'react';

//CSS Imports
import '../styles/rightPanelStyles/rightPanelStyle.css'

//Right Panel Components Imports
import Logout from "./rightPanelComponents/Logout";

const RightPanel = ({auth}) =>{
    return(
        <div className="rightPanel">
            <Logout auth={auth}/>
        </div>
    )
}

export default RightPanel;