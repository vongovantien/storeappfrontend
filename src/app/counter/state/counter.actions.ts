import { createAction, props } from '@ngrx/store';

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');


export const customIncrement = createAction(
  'customincrement',
  props<{ count: number }>()
)

export const changeText = createAction('changeText')
