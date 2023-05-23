import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//NGRX
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as userActions from '../../store/actions';

//Types
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit, OnDestroy {
  id?: string | null = null;
  user?: User | null = null;
  loading: boolean = false;
  error?: string | null = null;
  routerSubscription: Subscription = new Subscription();
  storeSubscription: Subscription = new Subscription();

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;

      if (error)
        this.error = `User with id; ${this.id} not found`
    });

    this.routerSubscription = this.router.params.subscribe(({ id }) => {
      this.id = id;
      this.store.dispatch(userActions.loadUser({ id }));
    });
  }

  ngOnDestroy(): void {
    this.id = null;
    this.user = null;
    this.loading = false;
    this.error = null;
    this.routerSubscription?.unsubscribe();
    this.storeSubscription?.unsubscribe();
  }
}
