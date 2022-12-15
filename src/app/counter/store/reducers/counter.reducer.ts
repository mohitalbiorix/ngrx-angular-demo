import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State { }

export const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1),
  on(CounterActions.reset, state => 0)
);

export function counterReducer(state: any, action: any) {
  return reducer(state, action)
}
