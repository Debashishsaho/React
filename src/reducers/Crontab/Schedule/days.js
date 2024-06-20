import { SET_DAYS_RADIO_BUTTON_VALUE,
    SET_DAYS_OPTION_VALUE,
    SET_DAY_HAS_ERROR
 } from "../../../constants/ActionTypes"

const initialState ={ 
    selectedRadio: 'Every Day',
    selectedOption: [],
    hasError: false
}

export const days = (state=initialState,action) =>{
    const { type,payload }=action
    switch(type){
        case SET_DAYS_RADIO_BUTTON_VALUE:
            return {
                ...state,
                selectedRadio:payload
            };
        case SET_DAYS_OPTION_VALUE:
            return {
                ...state,
                selectedOption:payload
            };
        case SET_DAY_HAS_ERROR:
            return {
                ...state,
                hasError:payload
            }
        default:
            return state
    }
}