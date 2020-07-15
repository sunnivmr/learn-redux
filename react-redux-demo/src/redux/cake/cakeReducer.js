import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

// Reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Makes a copy of the object
        numOfCakes: state.numOfCakes - action.payload, // Changes only the chosen parameter
      };

    default:
      return state;
  }
};

export default cakeReducer;
