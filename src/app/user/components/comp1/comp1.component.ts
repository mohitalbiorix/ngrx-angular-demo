import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';
import { UserState } from '../../store/user.state';
import * as UserActions from 'src/app/user/store/user.actions'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  $user: Observable<User[]>;

  constructor(
    private store: Store<UserState>
  ) {
    this.$user = store.select('userStore')
  }

  ngOnInit() {

  }

  removeUser(id: number) {
    this.store.dispatch(new UserActions.RemoveUser(id))
  }

}
