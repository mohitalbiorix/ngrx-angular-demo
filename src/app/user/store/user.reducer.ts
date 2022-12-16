import { User } from '../model/user.model';
import * as DemoActions from '../store/user.actions';

export const userFeatureKey = 'user';


export const initialState: User = {
  name: 'Mohit',
  gender: 'Male',
  id: '675423'
};

export function reducer(state: User[] = [initialState], action: DemoActions.Actions) {
  switch (action.type) {
    case DemoActions.ADD_USER:
      return [...state, action.payload];
    case DemoActions.REMOVE_USER:
      const newState = [...state].splice(action.payload, 1);
      const newUsersData = state.filter(data => data.id != newState[0].id)
      return newUsersData;
    default:
      return state;
  }
}
