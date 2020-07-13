const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake has been bought",
  };
}

const initialState = {
  numOfCakes: 10,
};

// If action is BUY_CAKE, the number of cakes decreases by 1
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Make a copy of the state onject and then change only the parts that need to be changed
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
