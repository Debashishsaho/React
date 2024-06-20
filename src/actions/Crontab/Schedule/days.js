import { SET_DAYS_RADIO_BUTTON_VALUE, 
    SET_DAYS_OPTION_VALUE,
     SET_DAY_HAS_ERROR } from "../../../constants/ActionTypes";

export const setDaysRadioButtonValue= (value)=> dispatch=>{
    dispatch({
        type: SET_DAYS_RADIO_BUTTON_VALUE,
        payload: value
    })
}
export const setDaysOptionValue= (value)=> dispatch=>{
    dispatch({
        type: SET_DAYS_OPTION_VALUE,
        payload: value
    })
}

export const setDayHasError= (value) => dispatch =>{
    dispatch({
        type: SET_DAY_HAS_ERROR,
        payload: value
    })
}
