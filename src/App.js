import React from 'react';
import './App.css';

const LocalCounter=(props) =>{

  const[ buttonValue,setButtonValue] = React.useState(-10);

  return (
    <div>
      the button value is {buttonValue}
      <button onClick={() =>{
        setButtonValue(buttonValue+1)
      }}>Hello World</button>
    </div>
  )
    
  


}

export default LocalCounter;
