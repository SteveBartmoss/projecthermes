import { useContext, useState } from "react";
import { createContext } from "react";


export const FrameContext = createContext();

export const useFrameContext = () => {
    const context = useContext(FrameContext)
    if(!context){
        throw new Error("useFrameContext must be used within a FrameContextProvider")
    }
    return context
}

export const FrameContextProvider = ({children}) => {
    
    const [url,setUrl] = useState('')
    const [body,setBody] = useState('')
    const [method, setMethod] = useState('GET')
    const [typeBody,setTypeBody] = useState('body')
    const [typeToken,setTypeToken] = useState('')
    const [token,setToken] = useState('')
    const [params,setParams] = useState('')

    return(
        <FrameContext.Provider value={{url,setUrl,body,setBody,method,setMethod,typeBody,setTypeBody,typeToken,setTypeToken,token,setToken,params,setParams}}>
            {children}
        </FrameContext.Provider>
    )

}