import { createContext, useContext, useEffect, useState } from "react"
import { getAccessTokenFromLs } from "../utils/auth"

interface AppContextInterface{
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
//     profile: User | null
//   setProfile: React.Dispatch<React.SetStateAction<User | null>>
}
const initialAppContext : AppContextInterface = {
    isAuthenticated: Boolean(getAccessTokenFromLs()),
    setIsAuthenticated:()=>null
}
export const AppContext= createContext<AppContextInterface>(initialAppContext)

export const useAuth = () => useContext(AppContext);

export const AppProvider = ({children}:{children:React.ReactNode})=>{
    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
    // console.log("app context", getAccessTokenFromLs());
    // console.log("app context", isAuthenticated);
    
    return( <AppContext.Provider value={{
        isAuthenticated, setIsAuthenticated
    }}>{children}</AppContext.Provider>)
}