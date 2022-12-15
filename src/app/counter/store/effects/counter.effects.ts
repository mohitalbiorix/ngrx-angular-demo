import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as CounterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {


  loadCounters$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CounterActions.loadCounters),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
