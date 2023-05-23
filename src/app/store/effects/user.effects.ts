

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      // ofType
      ofType(userActions.loadUser),
      //   tap((data: any) => console.log('effect tap', data)),
      mergeMap(({id}) =>
        this.userService.getUserById(id).pipe(
          // tap((data) => console.log('getUsers effect', data)
          map((user: User) => userActions.loadUserSuccess({ user })),
          catchError((err) => of(userActions.loadUserFailure({ payload: err })))
        )
      )
    )
  );
}
