import React from 'react';

const Form = ({logIn, email, pass, setEmail, setPass, err}) => {
    return (
        <form className="loginForm" onSubmit={logIn}>
            <h4>Login with email &amp; password</h4>
            <label>
                Email: <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </label>

            <label>
                Password: <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
            </label>
            <p className="err">
                {err}
            </p>
            <button type="submit">Login</button>
        </form>
    )
}

export default Form;