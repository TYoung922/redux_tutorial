// import logo from "./logo.svg";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
import { sign_in } from "./actions";
import "./app.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  // color state
  const [counterColor, setCounterColor] = useState("black");

  //handle increment change color
  const handleIncrement = () => {
    dispatch(increment(3));
    setCounterColor("green");
  };

  //handle decrement change color
  const handleDecrement = () => {
    dispatch(decrement());
    setCounterColor("red");
  };

  return (
    <div className="App">
      <h2 style={{ color: counterColor }}>Counter {counter}</h2>
      <button onClick={handleIncrement} className="plus">
        + 3
      </button>
      <button className="minus" onClick={handleDecrement}>
        - 2
      </button>
      {isLogged ? (
        <h1> "You are AWESOME!" </h1>
      ) : (
        <h3>Important Information</h3>
      )}
      {isLogged ? (
        <img
          src="https://editablegifs.com/gifs/gifs/fireworks-1/output.gif"
          alt="fire Works"
        ></img>
      ) : (
        <button onClick={() => dispatch(sign_in())} className="reveal">
          Click to See
        </button>
      )}
    </div>
  );
}

export default App;
