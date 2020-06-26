import React from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './store';
import { counter as counterSlice } from './slice';
import { getLog } from './middleWares/logger';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 50px auto;
`;

const Flex = styled.div`
  display: flex;
  > * {
    margin-right: 20px;
  }
`;

const Input = styled.input`
  height: 36px;
  padding: 0 10px;
  font-size: 24px;
  text-align: right;
  width: 100px;
  background: none;
  border: 1px solid #555;
  border-radius: 5px;
`;

const Button = styled.button`
  height: 36px;
  width: 36px;
  background-color: #fff;
  color: #000;
  font-size: 24px;
  border: 1px solid #555;
  border-radius: 5px;
`;

const Log = styled.div`
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px 20px;
  min-width: 200px;
  margin-top: 10px;
  > * {
    margin-bottom: 10px;
  }
`;

function App() {
  const dispatch = useDispatch();
  const logs = getLog();
  const counter = useSelector((store: StoreState) => store.counter);
  return (
    <Layout>
      <Flex>
        <Input
          disabled
          value={counter}
        />
        <Button onClick={() => dispatch(counterSlice.actions.increment())}>+</Button>
        <Button onClick={() => dispatch(counterSlice.actions.decrement())}>-</Button>
      </Flex>
      <Log>
        <p>Log: </p>
        {logs.length > 0 && logs.map((log) => (
          <div>
            {log}
          </div>
        ))}
      </Log>
    </Layout>
  );
};

export default App;
