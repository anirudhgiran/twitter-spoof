import React from 'react';

//React Router DOM Imports
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = ({ headerText }) => {
    return (
        <header>
            <Router>
                <Link to="home">
                    <h3>{headerText}</h3>
                </Link>
            </Router>
        </header>
    )
}

export default Header;