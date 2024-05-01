import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { loginStart, loginSuccess } from './login.action';
import { AppState } from 'src/app/app.state';
import { setLoadingSpinner, setErrorMessage } from 'src/app/state/shared/shared.actions';

@Injectable()

export class LoginEffects {

	constructor(private actions$: Actions, private loginService: LoginService,
        private store: Store<AppState>,private router: Router) {}

	login$ = createEffect(() => {
        return this.actions$.pipe(
          	ofType(loginStart),
         	exhaustMap((action) => {
         		let loginDetails = {
         			'email': action.email,
         			'password': action.password
         		}
                this.store.dispatch(setLoadingSpinner({ status: true }));
            	return this.loginService.login(loginDetails).pipe(
              	map((data) => {
                    this.store.dispatch(setLoadingSpinner({ status: false }));
                	return loginSuccess();
              	}),
                catchError((errResp) => {
                    this.store.dispatch(setLoadingSpinner({ status: false }));
                    /*const errorMessage = this.authService.getErrorMessage(
                      errResp.error.error.message
                    );*/
                    console.log(errResp)
                    return of(setErrorMessage({ message: errResp.message }));
                })
            );
          })
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action:any) => {
                this.router.navigate(['/']);
            })
        );
    },
    { dispatch: false }
  );
}