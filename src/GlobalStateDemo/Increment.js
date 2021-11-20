import React from 'react'
import { incrementCount } from '../redux/action';
import { useDispatch } from 'react-redux';

const Increment=() =>{
    const dispatch = useDispatch();

    const increment = ()=>{
        
        dispatch(incrementCount())
    }

    return(
        <div>
            <button onClick ={increment}>Increment</button>
        </div>
    )
}

export default Increment
