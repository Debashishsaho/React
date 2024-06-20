import { combineReducers  } from "redux";
import { days } from './Schedule/days';
import { hours } from './Schedule/hours';
import { minutes } from './Schedule/minutes';
import { months } from './Schedule/months';
import { weekdays } from './Schedule/weekday';
import { commandToExecute } from "./commandToExecute";
import { generateCrontabLine } from "./generateCrontabLine";
import { howToHandleOutput } from "./howToHandleOutput";

export const crontab = combineReducers({
    days,
    hours,
    minutes,
    months,
    weekdays,
    commandToExecute,
    generateCrontabLine,
    howToHandleOutput,
})