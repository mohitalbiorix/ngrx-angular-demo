import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export const ADD_USER = "Add User"
export const REMOVE_USER = "Remove User"

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) { }
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: number) { }
}

export type Actions = AddUser | RemoveUser


