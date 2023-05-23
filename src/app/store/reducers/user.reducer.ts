import { createReducer, on, type Action } from '@ngrx/store';
import * as userAction from '../actions/user.actions';

import { User } from 'src/app/models/user.model';
import type { PayloadError } from './';

export interface State {
    id: string | null
    user: User | null;
    loaded: boolean;
    loading: boolean;
    error: PayloadError | null;
}

export const initialState: State = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _userReducer = createReducer(
    initialState,
    on(userAction.loadUser, (state, { id }) => ({ ...state, loading: true, id})),
    on(userAction.loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...user }
    })),
    on(userAction.loadUserFailure, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function userReducer(state: State | undefined, action: Action) {
    return _userReducer(state, action);
}
