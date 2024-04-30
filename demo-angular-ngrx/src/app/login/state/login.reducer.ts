import { createReducer } from '@ngrx/store';

import { initialState } from './login.state';


const _loginReducer = createReducer(initialState);

export function LoginReducer(state:any, action:any) {
  return _loginReducer(state, action);
}