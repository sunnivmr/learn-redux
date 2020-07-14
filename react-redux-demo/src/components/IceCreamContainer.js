import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of ice creams: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy cake</button>
    </div>
  );
}

// Gets the redux state as the parameter and returns an object
// The object creates the prop numOfCakes which is mapped to the redux state numOfCakes
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// Gets the redux dispatch method as the parameter and returns an object
// The object creates the function buyCake which is mapped to the redux dispatch method buyCake()
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
