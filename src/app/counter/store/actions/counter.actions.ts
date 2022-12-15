import { createAction } from '@ngrx/store';

export const loadCounters = createAction(
  '[Counter] Load Counters'
);

export const increment = createAction('[Counter Component] Increment');

export const decrement = createAction('[Counter Component] Decrement');

export const reset = createAction('[Counter Component] Reset');


