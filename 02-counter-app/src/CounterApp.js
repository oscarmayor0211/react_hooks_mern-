import React, { useState }  from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = (e) => {
        setCounter(counter + 1)
    }

    const handleResta = (e) => {
        setCounter(counter - 1)
    }

    const handleReset = (e) => {
        setCounter(value)
    }
    return (
        <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick = {handleAdd}>+1</button>
        <button onClick = {handleReset}>Reset</button>
        <button onClick = {handleResta}>-1</button>

        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;