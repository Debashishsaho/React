import { SET_HOURS_RADIO_BUTTON_VALUE,
    SET_HOURS_OPTION_VALUE,
    SET_HOUR_HAS_ERROR
 } from "../../../constants/ActionTypes";


 export const setHoursRadioButtonValue=(value)=>dispatch=>{
    dispatch({
        type:SET_HOURS_RADIO_BUTTON_VALUE,
        payload:value
    })
 }

 export const setHoursOptionValue=(value)=>dispatch=>{
    dispatch({
        type:SET_HOURS_OPTION_VALUE,
        payload:value
    })
 }

 export const setHourHasError=(value)=>dispatch=>{
    dispatch({
        type:SET_HOUR_HAS_ERROR,
        payload:value
    })
 }

