import { useContext } from "react";
import { createContext } from "react";


export const FrameContext = createContext();

export const useFrameContext = () => {
    const context = useContext(FrameContext)
    if(context){
        throw new Error("useFrameContext must be used within a FrameContextProvider")
    }
    return context
}

export const FrameContextProvider = ({children}) => {
    
}