import React from 'react'
import { useSelector  } from 'react-redux';

const Display=(props) => {

    const display = useSelector(state => state);
       return( <div>
            {JSON.stringify(display)}
            
            
        </div>
       )
}

export default Display;
