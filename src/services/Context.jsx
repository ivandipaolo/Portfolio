import React,{createContext} from "react"; 

export const Context = createContext();

export const DataProvider = ({children}) =>{


    return <Context.Provider value = {{}}>
        {children}
    </Context.Provider>
}