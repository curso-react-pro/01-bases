import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'increaseBy':
        return {
          ...state,
          previous:state.count,
          changes:action.payload.value,
          count : state.count + action.payload.value
        }
      case "reset":
        return {
          count: 0,
          previous: 0,
          changes: 0
        }
      default:
        return state;
    }
  }