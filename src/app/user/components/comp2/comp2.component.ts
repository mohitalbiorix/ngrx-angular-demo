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

  name:string = '';
  gender:string ='';

  addToStore(name: string, gender: string) {
    if (name && gender) {
      this.store.dispatch(new UserActions.AddUser({
        name: name,
        gender: gender,
        id: Math.random().toString(16).slice(2)
      }))
    }
    this.name ='';
    this.gender='';
  }

}
