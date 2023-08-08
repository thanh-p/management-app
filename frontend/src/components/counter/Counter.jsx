import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounter(by) {
        setCount(count + by)
    }

    function decrementCounter(by) {
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton incrementMethod={incrementCounter} decrementMethod={decrementCounter}/>
            <CounterButton by={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter}/>
            <CounterButton by={5} incrementMethod={incrementCounter} decrementMethod={decrementCounter}/>
            <button className='resetButton' onClick={resetCounter}>Reset</button>
        </>
    )
}