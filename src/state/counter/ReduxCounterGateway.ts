import { Dispatch } from 'redux';

import { CounterGateway } from '../../useCases/CounterGateway';
import { increment, decrement, reset } from './actions';

export function createReduxCounterGateway (dispatch: Dispatch<{}>): CounterGateway {
  return {
    increment () {
      dispatch(increment());
    },

    decrement () {
      dispatch(decrement());
    },

    reset() {
      dispatch(reset());
    }
  };
}
