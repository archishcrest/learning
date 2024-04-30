import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { HomeComponent } from './home.component';

const route:Routes =[
  {
    path:'',
    component:HomeComponent
  }
]


@NgModule({
declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(route)
  ],
  exports: [],
  providers: []
})
export class HomeModule {}