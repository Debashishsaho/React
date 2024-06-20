import { SET_MONTHS_RADIO_BUTTON_VALUE,
    SET_MONTHS_OPTION_VALUE,
    SET_MONTH_HAS_ERROR
 } from "../../../constants/ActionTypes"

const initialState ={ 
    selectedRadio: 'Every Month',
    selectedOption: [],
    hasError: false
}

export const months = ( state=initialState,action )=>{
    const { type, payload } = action;
    switch (type){
        case SET_MONTHS_RADIO_BUTTON_VALUE:
            return {
               ...state,
                selectedRadio:payload
            };
        case SET_MONTHS_OPTION_VALUE:
            return {
               ...state,
                selectedOption:payload
            };
        case SET_MONTH_HAS_ERROR:
            return {
               ...state,
                hasError:payload
            };
        default:
            return state;
    }
}