import React from 'react';

//Component Imports
import Form from "./registrationComponents/Form";

//React Router DOM Imports
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = ({auth}) =>{

    const signIn = () =>{
        
    }

    return(
        <main className="login">
            <h4>Welcome to</h4>
            <h1>Twitter Spoof</h1>
            <Form auth={auth}/>

            <Router>
                <Link to="/create-account">Don't have a account? Create One</Link>
            </Router>
        </main>
    )
}

export default Login;