import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
// import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

//NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as usersActions from '../../store/actions';
import { PayloadError } from 'src/app/store/reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
    .clickable {
      cursor: pointer;
    }
    `
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  error: PayloadError | null = null;

  constructor(private store: Store<AppState>, private router: Router) { }
  // private userService: UserService

  ngOnInit(): void {
    // this.userService.getUser().subscribe((response: any) => {
    //   this.users = [...response]
    // });

    this.store.dispatch(usersActions.loadUsers());

    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });
  }

  selectUser(id: string){
    this.router.navigate(['/user', id]);
  }

}
