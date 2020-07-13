import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counterjala);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
<h1>Counter {counter}</h1>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>dfbhsd-</button>
{isLogged ? <h3>value will print</h3> : 'n' }
    
    </div>
  );
}

export default App;
