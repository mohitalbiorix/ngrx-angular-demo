import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterRoutingModule,
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class CounterModule { }
