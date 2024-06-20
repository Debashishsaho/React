import {
  SET_WEEKDAYS_RADIO_BUTTON_VALUE,
  SET_WEEKDAYS_OPTION_VALUE,
  SET_WEEKDAY_HAS_ERROR,
} from "../../../constants/ActionTypes";

const initialState = {
  selectedRadio: "Every Weekday",
  selectedOption: [],
  hasError: false,
};

export const weekdays = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WEEKDAYS_RADIO_BUTTON_VALUE:
      return {
        ...state,
        selectedRadio: payload,
      };
    case SET_WEEKDAYS_OPTION_VALUE:
      return {
        ...state,
        selectedOption: payload,
      };
    case SET_WEEKDAY_HAS_ERROR:
      return {
        ...state,
        hasError: payload,
      };
    default:
      return state;
  }
};
