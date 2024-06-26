import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login.component';
import { LoginReducer } from './state/login.reducer';
import { LOGIN_STATE_NAME } from './state/login.selector';
import { LoginEffects } from './state/login.effects';

const route:Routes =[
  {
    path:'',
    component:LoginComponent
  }
]


@NgModule({
declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    StoreModule.forFeature(LOGIN_STATE_NAME, LoginReducer),
    EffectsModule.forFeature([LoginEffects]),
    RouterModule.forChild(route),
  ],
  exports: [],
  providers: []
})
export class LoginModule {}