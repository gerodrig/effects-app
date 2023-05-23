import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      // ofType
      ofType(usersActions.loadUsers),
      //   tap((data: any) => console.log('effect tap', data)),
      mergeMap(() =>
        this.userService.getUser().pipe(
          // tap((data) => console.log('getUsers effect', data)
          map((users: User[]) => usersActions.loadUsersSuccess({ users })),
          catchError((err) => of(usersActions.loadUsersFailure({ payload: err })))
        )
      )
    )
  );
}
