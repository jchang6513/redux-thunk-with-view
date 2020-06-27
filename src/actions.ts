import { counter as counterSlice } from './slice';
import { Dispatch } from 'redux';
import { StoreState } from './store';
import { ViewStates } from './viewStates';

export const increase = () => (
  async (dispatch: Dispatch, getState: () => StoreState, viewStates: ViewStates) => {
    viewStates.setState({ layoutBgColor: getState().counter * 10 });
    dispatch(counterSlice.actions.increment())
  }
);

export const decrease = () => (
  async (dispatch: Dispatch, getState: () => StoreState, viewStates: ViewStates) => {
    viewStates.setState({ layoutBgColor: getState().counter * 10 });
    dispatch(counterSlice.actions.decrement())
  }
);

export const changeColor = () => (
  async (dispatch: Dispatch, getState: () => StoreState, viewStates: ViewStates) => {
    viewStates.setState({ layoutBgColor: Math.random() * 255 });
  }
);
