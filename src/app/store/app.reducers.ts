import { ActionReducerMap } from '@ngrx/store';
import {users, user }from './reducers';

export interface AppState {
    users: users.State;
    user: user.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: users.usersReducer,
    user: user.userReducer,
};