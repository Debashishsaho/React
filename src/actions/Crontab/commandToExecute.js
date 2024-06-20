import PropTypes from 'prop-types'
import { SET_COMMAND_TO_EXECUTE,
    SET_COMMAND_HAS_ERROR
 } from "../../constants/ActionTypes";

 export const setCommandToExecute=(value)=>dispatch=>{
    dispatch({
        type:SET_COMMAND_TO_EXECUTE,
        payload:value
    })
 }

 export const setCommandHasError=(value)=>dispatch=>{
    dispatch({
        type:SET_COMMAND_HAS_ERROR,
        payload:value
    })
 }



 setCommandToExecute.propTypes ={
    value:PropTypes.string.isRequired,
 }

 setCommandHasError.propTypes ={
    value:PropTypes.bool.isRequired,
 }