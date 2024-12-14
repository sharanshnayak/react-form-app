import React, { useState } from "react";
import './Item.css';
function Item(props) {

  const [counter,setCounter]=useState(0);
  function minusCounter(){
    setCounter(counter-1);
  }

  function plusCounter(){
    setCounter(counter+1);
  }

  function resetCounter(){
    setCounter(0);
  }

  
  return (
    <div className="container">
        <h1>Increment & Decrement Counter</h1>
        <div className="counter">
            <button id="minusCounter" onClick={minusCounter}>
                <i className="fa-solid fa-minus fa-3x"></i>
            </button>
            <h1 className="counterValue">{counter}</h1>
            <button id="plusCounter" onClick={plusCounter}>
                <i className="fa-solid fa-plus fa-3x"></i>
            </button>
        </div>

        <button className="reset" onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Item;
