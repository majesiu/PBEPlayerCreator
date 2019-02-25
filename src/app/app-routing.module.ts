import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlayerCalcComponent} from './player-calc/player-calc.component';
import {PlayerFormComponent} from './player-form/player-form.component';

const routes: Routes = [
  { path: '', component: PlayerFormComponent },
  { path: 'calc', component: PlayerCalcComponent },
  { path: 'creator', component: PlayerFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
