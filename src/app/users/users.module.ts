import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { TitlePipe } from '../pipes/title.pipe';



@NgModule({
  declarations: [
    ListComponent,
    UserComponent,
    TitlePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    UserComponent
  ]
})
export class UsersModule { }
