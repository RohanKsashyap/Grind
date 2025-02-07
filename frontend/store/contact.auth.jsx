import { createContext, useContext } from "react";

export const Authcontext = createContext()



export const AuthProvider = ({children})=>{


    const storeToken_Ls = (setToken)=>{

      return  localStorage.setItem("token",setToken.token)



    }


return <Authcontext.Provider value={{storeToken_Ls}}>{children}</Authcontext.Provider>


}

// custom hook that contains all requred elements usecontext,provider etc.

export const useContactAuth = ()=>{

return useContext(Authcontext)

}