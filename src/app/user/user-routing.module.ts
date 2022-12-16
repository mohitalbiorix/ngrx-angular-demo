import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './components/comp3/comp3.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Comp3Component
  },
  {
    path: '',
    redirectTo: 'comp1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
