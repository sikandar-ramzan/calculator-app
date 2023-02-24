import { evaluate } from "mathjs"

export default (state, action) => {


    switch(action.type){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '-':
        case '+':
        case '*':
        case '/':
        case '%':
            if(state.buttonInput.length>15){
                alert("Maximum Characters Entered!")
                return{...state}

            }
            else{
                    return {

                        ...state,
                        buttonInput: state.buttonInput.concat(action.type)
                    }
            }
            

        case 'clear':

            if(state.buttonInput==="MATH ERROR" || state.buttonInput==="Syntax Error"){
                return {

                    ...state,
                    buttonInput: ''
                    , result: ''
                }
            }
            else{
                return {

                    ...state, buttonInput: state.buttonInput.slice(0,state.buttonInput.length-1,), result: ''
                }
            }

        case '=':

            let myRegex = /[^0-9]$|[a-zA-z]+|^[*/%]+/ig;
            let operatorRegex = /[+\-*/%]{2,}/;


                if(myRegex.test(state.buttonInput)){
                    //do nothing
                    return{...state, buttonInput: 'MATH ERROR'}

                }

                else if(operatorRegex.test(state.buttonInput)){

                    return{...state, buttonInput: "Syntax Error"}

                
                }

                else if (state.buttonInput===""){
                    return{...state}
                }
                else{

                    let res = evaluate(state.buttonInput);
                    
                    return {
                        ...state, result: res%1===0? res:res.toFixed(3)
                    }
        }

        case 'power':

            if (state.power===0){
                return{
                    ...state,
                    buttonInput:'',
                    powerColor: '#ED1628',
                    result:'',
                     power: state.power+1
                    }
        
            }
            else{
                
                return{
                    ...state,
                    buttonInput:'',
                    powerColor: '#1ED760',
                    result:'',
                    power: state.power-1
                    }
                }
            

            default:
            return state;
            
        }
    }


