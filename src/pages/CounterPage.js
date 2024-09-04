import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';



function CounterPage({initialCount}) {  
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count +1);
  }

  const decrement = () => {
    setCount(count -1);
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
    }


  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {count}</h1>
      <div className="flex flex-row">
      <Button onClick={increment}> Increment </Button>
      <Button onClick={decrement}> Decrement </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot !</label>
        <input
        value={valueToAdd || ""}
        onChange={handleChange}
        type="number"
        className="p-2 m-3 bg-gray-50 border-gray-300"/>
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage; 

/*

import React from 'react'
import { useReducer } from 'react'
import Button from "../components/Button";
import Panel from "../components/Panel"

const reducer = (state, action) => {
  //
}

function CounterPage({initialCount}) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0 
  })
  console.log (state);

  const increment = () =>{
    //setCount(count +1)
  }

  const decrement = () =>{
    //setCount(count -1);
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    //setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }


  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {state.count}</h1>
      <div className="flex flex-row">
      <Button onClick={increment} rounded> Increment </Button>
      <Button onClick={decrement} outlined> Decrement </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={state.valueToAdd || ''}
        onChange={handleChange}
        type="number"
        className="p-2 m-3 bg-gray-50 border-gray-300"
        />
        <Button rounded outlined>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage

*/