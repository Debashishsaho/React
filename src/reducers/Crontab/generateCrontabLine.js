import { GENERATE_CRONTAB_LINE  } from "../../constants/ActionTypes";

const initialState = {
    result: '',
}

export const generateCrontabLine = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GENERATE_CRONTAB_LINE:
            return {
               ...state,
                result: payload,
            };
        default:
            return state;
    }
}