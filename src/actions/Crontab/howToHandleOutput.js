import PropTypes from 'prop-types'
import {
    HOW_TO_HANDLE_OUTPUT,
    SET_PATH_TO_FILE_VALUE,
    SET_EMAIL_VALUE } from  '../../constants/ActionTypes';

    export const setHowToHandleOutputValue = (value) => dispatch=>{
        dispatch({
            type: HOW_TO_HANDLE_OUTPUT,
            payload: value
        });
    }
    export const setPathToFileValue = (value) => dispatch =>{
        dispatch({
            type: SET_PATH_TO_FILE_VALUE,
            payload: value
        });
    }
    
    export const setEmailValue = (value) => dispatch=>{
        dispatch({
            type: SET_EMAIL_VALUE,
            payload: value
        });
    }

    setHowToHandleOutputValue.propTypes = {
        value: PropTypes.oneOf(['mute', 'file', 'email']).isRequired,
    };
    
    setPathToFileValue.propTypes = {
        value: PropTypes.string.isRequired,
    };
    
    setEmailValue.propTypes = {
        value: PropTypes.string.isRequired,
    };