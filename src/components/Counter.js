import React, {useState} from 'react';

export const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        // Якщо counter === 0, то припинити рахунок у від'ємний бік

        if(counter === 1) return
        else {
            setCounter(counter - 1)
        }  
    }

    return (
        <div>
            <p>conter: {counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}