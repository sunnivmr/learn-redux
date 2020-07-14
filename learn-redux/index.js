const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action to buy cake
function buyCake() {
  return {
    type: BUY_CAKE,
    info: " 1 Cake has been bought",
  };
}

// Action to buy ice cream
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "1 Ice cream has been bought",
  };
}

// Initial cake state
const initialCakeState = {
  numOfCakes: 10,
};

// Initial ice cream state
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducers
// Controls how transitions happen

// Cake reducer
// If action is BUY_CAKE, the number of cakes decreases by 1
const cakeReducer = (state = initialCakeState, action) => {
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

// Icecream reducer
// If action is BUY_ICECREAM, the number of ice creams descreases by 1
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Creating store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

// Adds listener to store
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
