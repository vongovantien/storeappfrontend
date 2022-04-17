import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, customIncrement, changeText } from './counter.actions';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeText, (state) => {
    return {
      ...state,
      text: 'Van Tien',
    };
  })
)
