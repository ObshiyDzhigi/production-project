import React, {useState} from 'react';
import cl from './Counter.module.scss'
const Counter = () => {
    const[count,setCount] = useState(0)
    const increment =()=>{
        setCount(count + 1)
    }
    return (
        <div className={cl.btn}>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
