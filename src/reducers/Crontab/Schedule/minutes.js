
import { SET_MINUTES_RADIO_BUTTON_VALUE,
    SET_MINUTES_OPTION_VALUE,
    SET_MINUTE_HAS_ERROR
 } from "../../../constants/ActionTypes";

const initialState ={ 
    selectedRadio: 'Every Minute',
    selectedOption: [],
    hasError: false
}

export const minutes = ( state=initialState,action ) => {
    const { type, payload } = action;
    switch (type){
        case SET_MINUTES_RADIO_BUTTON_VALUE:
            return {
               ...state,
                selectedRadio:payload
            };
        case SET_MINUTES_OPTION_VALUE:
            return {
               ...state,
                selectedOption:payload
            };
        case SET_MINUTE_HAS_ERROR:
            return {
               ...state,
                hasError:payload
            };
        default:
            return state;
    }
}