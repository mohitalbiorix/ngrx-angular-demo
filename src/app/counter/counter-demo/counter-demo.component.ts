import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/actions/counter.actions';
import { CounterState } from '../store/counter.state';
import { CounterModel } from '../store/model/counter.model';

@Component({
  selector: 'app-counter-demo',
  templateUrl: './counter-demo.component.html',
  styleUrls: ['./counter-demo.component.scss']
})
export class CounterDemoComponent {

  count$: Observable<number>;

  constructor(
    private store: Store<CounterModel>
  ) {
    this.count$ = this.store.select('count')
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
