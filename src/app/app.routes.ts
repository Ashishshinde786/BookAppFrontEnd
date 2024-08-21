import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { User } from './models/user.model';
import { UserRegisterComponent } from './user/user-register/user-register.component';


export const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'regester', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
