import { BUY_COOKIE } from "./cookieTypes";

const initialState = {
  numOfCookies: 15,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state, // Makes copy of object and makes changes to chosen attribute
        numOfCookies: state.numOfCookies - 1,
      };

    default:
      return state;
  }
};

export default cookieReducer;
