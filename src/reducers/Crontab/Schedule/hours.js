import { SET_HOURS_RADIO_BUTTON_VALUE,
    SET_HOURS_OPTION_VALUE,
    SET_HOUR_HAS_ERROR
 } from "../../../constants/ActionTypes";

 const initialState ={ 
    selectedRadio: 'Every Hour',
    selectedOption: [],
    hasError: false
}

export const hours = (state=initialState, action) => {
    const { type,payload } = action;
    switch (type){
        case SET_HOURS_RADIO_BUTTON_VALUE:
            return {
               ...state,
                selectedRadio: payload
            }
        case SET_HOURS_OPTION_VALUE:
            return {
               ...state,
                selectedOption: payload
            }
        case SET_HOUR_HAS_ERROR:
            return {
               ...state,
                hasError: payload
            }
        default:
            return state;
    }
}