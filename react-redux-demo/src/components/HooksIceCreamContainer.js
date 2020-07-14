import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
