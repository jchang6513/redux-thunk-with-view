import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counter } from './slice';
import thunk from 'redux-thunk';
import { logger } from './middleWares/logger';
import viewStates from './viewStates';

const reducer = combineReducers({
  counter: counter.reducer,
})

export type StoreState = {
  counter: number;
};

export const store = createStore<StoreState, any, {}, {}>(
  reducer,
  applyMiddleware(thunk.withExtraArgument(viewStates), logger),
);
