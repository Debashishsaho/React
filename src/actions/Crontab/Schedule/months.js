import { SET_MONTHS_RADIO_BUTTON_VALUE, 
    SET_MONTHS_OPTION_VALUE,
     SET_MONTH_HAS_ERROR } from "../../../constants/ActionTypes";
// import { validate } from "uuid";

export const setMonthsRadioButtonValue= (value)=> dispatch=>{
    dispatch({
        type: SET_MONTHS_RADIO_BUTTON_VALUE,
        payload: value
    })
}
export const setMonthsOptionValue= (value)=> dispatch=>{
    dispatch({
        type: SET_MONTHS_OPTION_VALUE,
        payload: value
    })
}

export const setMonthHasError= (value) => dispatch =>{
    dispatch({
        type: SET_MONTH_HAS_ERROR,
        payload: value
    })
}