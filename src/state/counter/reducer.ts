import { Counter, createCounter, increment, decrement, reset } from '../../entities/Counter';
import { CounterAction } from './actions';
import { CounterActionTypes } from './types';

export type CounterState = Counter;

const initialState: CounterState = createCounter();

export function counterReducer (state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return increment(state);
    case CounterActionTypes.DECREMENT:
      return decrement(state);
    case CounterActionTypes.RESET:
      return reset();
    default:
      return state;
  }
}
