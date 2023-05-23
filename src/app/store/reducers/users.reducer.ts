import { createReducer, on, type Action } from '@ngrx/store';
import * as usersActions from '../actions/';
import { User } from 'src/app/models/user.model';

export interface State {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: PayloadError | null;
}

export interface PayloadError {
  url: string;
  name: string;
  message: string;
}

export const initialState: State = {
  users: [],
  loaded: false,
  loading: false,
  error:  null,
};

const _usersReducer = createReducer(
  initialState,
  on(usersActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(usersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(usersActions.loadUsersFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usersReducer(state: State | undefined, action: Action) {
  return _usersReducer(state, action);
}
