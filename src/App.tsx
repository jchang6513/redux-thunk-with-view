import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './store';
import { counter as counterSlice } from './slice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store: StoreState) => store.counter);

  return (
    <div className="App">
      <Container maxWidth="sm" style={{ margin: '100px auto' }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          <Grid container spacing={3} justify="space-around">
            <TextField
              disabled
              id="outlined-disabled"
              label="Counter"
              value={counter}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={() => dispatch(counterSlice.actions.increment())}
            >
              +
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch(counterSlice.actions.decrement())}
            >
              -
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
