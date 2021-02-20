import React from 'react';

const Form = () => {
    return (
        <form>
            <label>
                Email: <input type="email" />
            </label>

            <label>
                Password: <input type="password" />
            </label>

            <button type="submit">Login</button>
        </form>
    )
}

export default Form;