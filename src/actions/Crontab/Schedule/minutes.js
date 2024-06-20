import { SET_MINUTES_RADIO_BUTTON_VALUE, 
    SET_MINUTES_OPTION_VALUE,
     SET_MINUTE_HAS_ERROR } from "../../../constants/ActionTypes";

export const setMinutesRadioButtonValue= (value)=> dispatch=>{
    dispatch({
        type: SET_MINUTES_RADIO_BUTTON_VALUE,
        payload: value
    })
}
export const setMinutesOptionValue= (value)=> dispatch=>{
    dispatch({
        type: SET_MINUTES_OPTION_VALUE,
        payload: value
    })
}

export const setMinuteHasError= (value) => dispatch =>{
    dispatch({
        type: SET_MINUTE_HAS_ERROR,
        payload: value
    })
}