import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';

const routes: Routes = [
  {
    path: 'counter-demo',
    component: CounterDemoComponent
  },
  {
    path: '',
    redirectTo: 'counter-demo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
