import {SET_CHECKED,
    SET_NUMBER_FIELD_VALUE,
    SET_TEXT_FIELD_VALUE} from '../../constants/ActionTypes';

const initialState = {
    checked:{
    ownerRead: false,
    ownerWrite: false,
    ownerExecute: false,
    groupRead: false,
    groupWrite: false,
    groupExecute: false,
    othersRead: false,
    othersWrite: false,
    othersExecute: false,
    },
    numberFieldValue:'000',
    textFieldValue:'---------'
}

export const chmodCalculator = (state=initialState,action) =>{
    const { type, payload } = action;
    switch (type){
        case SET_CHECKED:
            return {
                ...state,
                checked:payload,
            };

        case SET_NUMBER_FIELD_VALUE:
            return {
                ...state,
                numberFieldValue:payload,
            };
        case SET_TEXT_FIELD_VALUE:
            return {
                ...state,
                textFieldValue:payload,
            };
        default:
            return state;
    }
}