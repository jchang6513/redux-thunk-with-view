import { counter as counterSlice } from './slice';
import { Dispatch } from 'redux';
import { StoreState } from './store';
import { PageStates } from './App';

export const increase = () => (
  async (dispatch: Dispatch, getState: () => StoreState, pageStates: PageStates) => {
    pageStates.layoutBgColor = getState().counter * 10;
    dispatch(counterSlice.actions.increment())
  }
);

export const decrease = () => (
  async (dispatch: Dispatch, getState: () => StoreState, pageStates: PageStates) => {
    pageStates.layoutBgColor = getState().counter * 10;
    dispatch(counterSlice.actions.decrement())
  }
);
