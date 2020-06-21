import { createStore, combineReducers } from 'redux';
import { counter } from './slice';

const reducer = combineReducers({
  counter: counter.reducer,
})

export type StoreState = {
  counter: number;
};

export const store = createStore<StoreState, any, {}, {}>(
  reducer,
);
