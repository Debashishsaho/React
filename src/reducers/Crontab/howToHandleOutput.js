import { HOW_TO_HANDLE_OUTPUT, 
    SET_PATH_TO_FILE_VALUE,
    SET_EMAIL_VALUE
} from '../../constants/ActionTypes'

const initialState ={
    howToHandleOutputValue:'mute',
    pathToFileValue:'',
    emailValue:'',
}

export const howToHandleOutput = ( state=initialState, action ) => {
    const { type, payload } = action;
    switch (type){
        case SET_PATH_TO_FILE_VALUE:
            return {
               ...state,
                pathToFileValue:payload,
            };
        case SET_EMAIL_VALUE:
            return {
               ...state,
                emailValue:payload,
            };
        case HOW_TO_HANDLE_OUTPUT:
            return {
               ...state,
                howToHandleOutputValue:payload,
            };
        default:
            return state;
    }
}