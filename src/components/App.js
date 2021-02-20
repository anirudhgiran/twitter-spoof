import React from 'react';

//React Components Imports
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const App = () =>{
    return(
        <>
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel/>
        </>
    );
}

export default App;