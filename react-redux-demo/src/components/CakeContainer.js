import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

// Gets the redux state as the parameter and returns an object
// The object creates the prop numOfCakes which is mapped to the redux state numOfCakes
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// Gets the redux dispatch method as the parameter and returns an object
// The object creates the function buyCake which is mapped to the redux dispatch method buyCake()
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
