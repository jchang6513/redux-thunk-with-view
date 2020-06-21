import React from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './store';
import { counter as counterSlice } from './slice';
import { getLog } from './middleWares/logger';

function App() {
  const dispatch = useDispatch();
  const logs = getLog();
  const counter = useSelector((store: StoreState) => store.counter);
  return (
    <div>
      <input
        disabled
        value={counter}
      />
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
      <div>
        {logs.length > 0 && logs.map((log) => (
          <div>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
