import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {
    power: 0,
    buttonInput: "",
    experession: "",
    powerColor:'red',
    operator: '',
    result: "",
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    function updateInputText (type){
        dispatch({
            type
        })
    }

    return (<GlobalContext.Provider value={{state, updateInputText}}>
              {children}
             </GlobalContext.Provider>);
}