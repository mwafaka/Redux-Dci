import React from "react";
import { connect } from "react-redux";
// import provider from "react-redux";

// const increment = () => {
//   return { type: "INCREMENT" };
// };
// const decrement = () => {
//   return { type: "DECREMENT" };
// };

const Counter = props => {
  console.log(props);
  return (
    <div>
      <p>{props.state}</p>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = {
  increment: () => ({ type: "INCREMENT" }),
  decrement: () => ({ type: "DECREMENT" })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
