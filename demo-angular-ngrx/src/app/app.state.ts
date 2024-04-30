import { CounterState } from './counter/state/counter.state';

import { counterReducer } from './counter/state/counter.reducer';

export interface AppState {
    counter: CounterState;
}

export const appReducer = {
    counter: counterReducer,
};