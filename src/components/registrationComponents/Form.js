import React from 'react';

const Form = ({logIn, email, pass, setEmail, setPass}) => {
    return (
        <form method="post" onSubmit={logIn}>
            <label>
                Email: <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </label>

            <label>
                Password: <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
            </label>

            <button type="submit">Login</button>
        </form>
    )
}

export default Form;