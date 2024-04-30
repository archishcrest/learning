import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { LoginService } from '../login.service';
import { loginStart, loginSuccess } from './login.action';

@Injectable()

export class LoginEffects {

	constructor(private actions$: Actions, private loginService: LoginService) {}

	login$ = createEffect(() => {
    return this.actions$.pipe(
      	ofType(loginStart),
     	exhaustMap((action) => {
     		let loginDetails = {
     			'email': action.email,
     			'password': action.password
     		}
        	return this.loginService.login(loginDetails).pipe(
          	map((data) => {
            	return loginSuccess();
          	})
        );
      })
    );
  });

}