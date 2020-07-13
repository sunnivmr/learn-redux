const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake has been bought",
  };
}

// Initial state
const initialState = {
  numOfCakes: 10,
};

// Reducer
// Controls how transitions happen
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

// Creating store
const store = createStore(reducer);
console.log("Initial state", store.getState());

// Adds listener to store
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
