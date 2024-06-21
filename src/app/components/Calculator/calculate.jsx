import React, { useState } from 'react';
import style from './style.module.css'

const Counter = () => {
    // Initialize the state with the useState hook
    const [count, setCount] = useState(0);

    // Function to handle increment
    const increment = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className={style.counter}>
            <button className={style.increase} onClick={decrement}>-</button>
            <h1 className={style.count}>{count}</h1>
            <button className={style.increase} onClick={increment}>+</button>

        </div>
    );
};

export default Counter;
