import { CounterActionTypes } from './types';

type IncrementAction = {
  type: CounterActionTypes.INCREMENT
};

type DecrementAction = {
  type: CounterActionTypes.DECREMENT
};

type ResetAction = {
  type: CounterActionTypes.RESET
};

export type CounterAction =
  IncrementAction
  | DecrementAction
  | ResetAction;

export function increment(): IncrementAction {
  return {
    type: CounterActionTypes.INCREMENT
  };
}

export function decrement(): DecrementAction {
  return {
    type: CounterActionTypes.DECREMENT
  };
}

export function reset(): ResetAction {
  return {
    type: CounterActionTypes.RESET
  };
}
