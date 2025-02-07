import { createContext } from "react"



// 1st step
export const Biocontext = createContext()



//2nd 

 export const BioProvider = ({children})=>{

    const myname = "USER AUTH";


return (<Biocontext.Provider value={myname}>{children}</Biocontext.Provider>)

}