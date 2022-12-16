import {
  ActionReducerMap,
} from '@ngrx/store';
import { counterReducer } from '../counter/store/reducers/counter.reducer';
import { reducer } from '../user/store/user.reducer';

export const stateFeatureKey = 'state';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  userStore: reducer,
  count: counterReducer
};


