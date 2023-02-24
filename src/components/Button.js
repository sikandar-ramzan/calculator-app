import React, {useContext} from "react";
import { GlobalContext } from "../GlobalState";
import "./button.css"



export default function Button({name, value}) {
    let element;
    const {state, updateInputText} = useContext(GlobalContext)
    
   

    if (name === "clear"){
        element = <i className="bi bi-backspace"></i>

    }

    else if(name === "power"){

        if(state.power===0){
            element = <i style={{color: '#ED1628'}} className="bi bi-power"></i>
        }

        else if(state.power===1){
            element = <i style={{color: '#1ED760'}} className="bi bi-power"></i>
        }
    }

    else{
        element=name;
    }

  return (
    <>
        <button className='bttn-default' onClick={()=> updateInputText(value)} >
            <p>{element}</p>
        </button>
    </>
  )
}
