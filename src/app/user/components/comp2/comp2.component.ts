import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user.state';
import * as UserActions from '../../store/user.actions'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  constructor(private store: Store<UserState>) { }

  addToStore(name: any, gender: any) {
    if (name && gender) {
      this.store.dispatch(new UserActions.AddUser({
        name: name,
        gender: gender,
        id: Math.random().toString(16).slice(2)
      }))
    }
  }

}
