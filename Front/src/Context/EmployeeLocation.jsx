import React, { createContext, useState } from "react";

export const EmployeeContext = createContext({
    location:{},
    handleEmployeeLocation: () => {}
})

const EmployeeContexts = ({children}) =>{
    const [location,setLocation] = useState("")
    const handleEmployeeLocation = (data) =>{
        setLocation(data)
    }
    return <EmployeeContext.Provider value={{location,handleEmployeeLocation}}>{children}</EmployeeContext.Provider>
}
export {EmployeeContexts}