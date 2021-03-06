import React, { useEffect } from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './store';
import { getLog } from './middleWares/logger';
import styled from 'styled-components';
import { increase, decrease, changeColor } from './actions';
import { connectViewStates } from './connectViewStates';

const Layout = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
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
  min-width: 36px;
  color: #000;
  font-size: 20px;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px 10px;
  outline-color: #555;
  outline-width: 2px;
`;

const BorderBox = styled.div`
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px 20px;
  min-width: 200px;
  margin-top: 10px;
`

const Events = styled.div`
  max-height: 50vh;
  overflow: scroll;
  > * {
    margin-bottom: 10px;
  }
  td {
    padding-bottom: 5px;
    padding-right: 10px;
    min-width: 30px;
  }
`;

const App = (props: any) => {
  const dispatch = useDispatch();
  const logs = getLog();
  const counter = useSelector((store: StoreState) => store.counter);
  const {
    viewStates: {
      layoutBgColor,
    }
  } = props;

  useEffect(() => {
    document.body.style.backgroundColor =`hsl(${layoutBgColor}, 100%, 95%)`
  }, [layoutBgColor])

  return (
    <Layout>
      <Flex>
        <Input
          disabled
          value={counter}
        />
        <Button onClick={() => dispatch(increase())}>+</Button>
        <Button onClick={() => dispatch(decrease())}>-</Button>
        <Button onClick={() => dispatch(changeColor())}>RandomColor</Button>
      </Flex>
      <BorderBox>
        <p>Dispatch Events: </p>
        { logs.length > 0 && (
          <Events>
            <table>
              <tbody>
                {logs.map((log, index) => (
                  <tr key={index}>
                    <td>{index}: </td>
                    <td>{log}</td>
                  </tr>
                )).slice(0).reverse()}
              </tbody>
            </table>
          </Events>
        )}
      </BorderBox>
    </Layout>
  );
};

export default connectViewStates(App);
