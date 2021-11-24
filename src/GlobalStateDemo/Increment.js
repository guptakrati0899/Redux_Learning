import React from 'react'
import { getTitle, incrementCount } from '../redux/action';
import { useDispatch } from 'react-redux';

const Increment=() =>{
    const dispatch = useDispatch();

    const increment = ()=>{
        
        dispatch(getTitle())
    }

    return(
        <div>
            <button onClick ={increment}>Increment</button>
        </div>
    )
}

export default Increment
