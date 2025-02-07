import React, { useContext, useState } from 'react';
import { Biocontext } from '.';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {

    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  const myname = useContext(Biocontext)

    return (
        <div>
            <h1 style={{color:'black'}}>   {myname} 
            </h1>

    {isAuthenticated ?
     (<div>
    <button style={{backgroundColor:"blue",color:"white"}} onClick={() => logout()}>Log out</button>
        
        </div>)

:(<div>
    <button style={{backgroundColor:"blue",color:"white"}} onClick={() => loginWithRedirect()}>Log In</button>

</div>)



}





</div>

            
            

    

); 
}

export default Home;