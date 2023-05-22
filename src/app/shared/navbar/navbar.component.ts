import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  constructor(private router: Router) { }

  searchUser(id: string ){
    if(!id) return;

    this.router.navigate(['/user', id]);
  }
}
