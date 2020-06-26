import React from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './store';
import { getLog } from './middleWares/logger';
import styled from 'styled-components';
import { increase, decrease } from './actions';

const Layout = styled.div.attrs(props => ({ hue: 0, ...props }))`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  background-color: ${({ hue }) => `hsl(${hue}, 100%, 95%)`};
`;

const Flex = styled.div`
  display: flex;
  > * {
    margin-right: 20px;
  }
`;

const Input = styled.input`
  background: none;
  height: 36px;
  padding: 0 10px;
  font-size: 24px;
  text-align: right;
  width: 100px;
  border: 1px solid #555;
  border-radius: 5px;
`;

const Button = styled.button`
  background: none;
  height: 36px;
  width: 36px;
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

export type PageStates = {
  layoutBgColor: number;
};

export const pageStates: PageStates = {
  layoutBgColor: 0,
};

function App() {
  const dispatch = useDispatch();
  const logs = getLog();
  const counter = useSelector((store: StoreState) => store.counter);
  return (
    <Layout hue={pageStates.layoutBgColor}>
      <Flex>
        <Input
          disabled
          value={counter}
        />
        <Button onClick={() => dispatch(increase())}>+</Button>
        <Button onClick={() => dispatch(decrease())}>-</Button>
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
