import { SET_WEEKDAYS_RADIO_BUTTON_VALUE, 
    SET_WEEKDAYS_OPTION_VALUE,
    SET_WEEKDAY_HAS_ERROR } from "../../../constants/ActionTypes";

export const setWeekdaysRadioButtonValue= (value)=> dispatch=>{
    dispatch({
        type: SET_WEEKDAYS_RADIO_BUTTON_VALUE,
        payload: value
    })
}
export const setWeekdaysOptionValue= (value)=> dispatch=>{
    dispatch({
        type: SET_WEEKDAYS_OPTION_VALUE,
        payload: value
    })
}

export const setWeekdayHasError= (value) => dispatch =>{
    dispatch({
        type: SET_WEEKDAY_HAS_ERROR,
        payload: value
    })
}