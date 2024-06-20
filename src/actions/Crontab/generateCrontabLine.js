import { GENERATE_CRONTAB_LINE } from "../../constants/ActionTypes";
import PropTypes from 'prop-types'

export const setResult = (value)=>dispatch=>{
    dispatch({
        type:GENERATE_CRONTAB_LINE,
        payload:value
    })
}

setResult.propTypes = {
    value:PropTypes.string
}