import React from "react";

import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

// Components
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCookieContainer from "./components/HooksCookieContainer";
import CookieContainer from "./components/CookieContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Cake shop</h1>
        <ItemContainer cake />
        <ItemContainer iceCream />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
