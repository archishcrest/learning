import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[login page] login start';
export const LOGIN_SUCCESS = '[login page] login Success';
export const LOGIN_FAIL = '[login page] login Fail';


export const loginStart = createAction(
	LOGIN_START,
	props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  	LOGIN_SUCCESS
);