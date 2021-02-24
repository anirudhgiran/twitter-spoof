import React from 'react';

const Logout = ({auth}) =>{
    return(
        <button onClick={()=>{auth.signOut();}}>Logout</button>
    )
}

export default Logout;