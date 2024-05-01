import { SharedState } from './state/shared/shared.state';
import { SHARED_STATE_NAME } from './state/shared/shared.selector';
import { SharedReducer } from './state/shared/shared.reducer';

export interface AppState {
    [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
};