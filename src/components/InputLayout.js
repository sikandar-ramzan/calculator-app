
import React, {  useContext } from "react";
import { GlobalContext } from "../GlobalState";
import "./quoteBox.css"


function InputLayout() {
// const anObject = {
//   key1: "key1",
//   key2: [2,3]
// }

const {state}  = useContext(GlobalContext)
// console.log(state)
// const {context,myAction} = useContext(GlobalContext);
  // const {buttonInput, experession, operator, result} = useContext(GlobalContext)
  // console.log(buttonInput);
  // console.log(experession)
  // // console.log(operator)
  // console.log(context);
  // console.log(context.buttonInput)

  return (
    <div className='input-container'>
       {state.power ===1 && <p className="inputFromButton">{state.buttonInput}</p>}
        {/* <br/> */}
        {state.power ===1 && <div className="result"><div className="resText"> </div><p className="resText">{state.result}</p></div>}
        
       
       
     </div>
  )
}

export default InputLayout;