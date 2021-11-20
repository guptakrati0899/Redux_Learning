import React from 'react';
import './App.css';
import Display from './GlobalStateDemo/Display';
import Increment from './GlobalStateDemo/Increment';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App=(props) =>{

  // const[ buttonValue,setButtonValue] = React.useState(-10);

  return (
    <Provider store ={store}>
    <div>
      <Display/>
      <Increment/>
    </div>
    </Provider>
  )
    
  


}

export default App;
