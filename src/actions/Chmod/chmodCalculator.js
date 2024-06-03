// actions/chmodCalculator.js
import { SET_CHECKED, SET_NUMBER_FIELD_VALUE, SET_TEXT_FIELD_VALUE } from "../../constants/ActionTypes";

export const setChecked = (checkboxes) => dispatch => {
    dispatch({
        type: SET_CHECKED,
        payload: checkboxes
    });
};

export const setNumberFieldValue = (numberValue) => dispatch => {
    dispatch({
        type: SET_NUMBER_FIELD_VALUE,
        payload: numberValue
    });
};

export const setTextFieldValue = (textValue) => dispatch => {
    dispatch({
        type: SET_TEXT_FIELD_VALUE,
        payload: textValue
    });
};
