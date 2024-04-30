import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import { RegisterComponent } from './register.component';

const route:Routes =[
  {
    path:'',
    component:RegisterComponent
  }
]


@NgModule({
declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(route)
  ],
  exports: [],
  providers: []
})
export class RegisterModule {}