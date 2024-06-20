import { SET_COMMAND_TO_EXECUTE,
    SET_COMMAND_HAS_ERROR
 } from "../../constants/ActionTypes";

 const initialState = {
    commandToExecuteValue: "",
    commandHasError: false,
 }

 export const commandToExecute = ( state=initialState, action) => {
    const { type, payload } = action;
    switch (type){
        case SET_COMMAND_TO_EXECUTE:
            return {
               ...state,
                commandToExecuteValue:payload,
            };
        case SET_COMMAND_HAS_ERROR:
            return {
               ...state,
                commandHasError:payload,
            };
        default:
            return state;
    }
 }