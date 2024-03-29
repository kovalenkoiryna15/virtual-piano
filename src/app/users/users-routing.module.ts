import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';

import { UserListComponent, UserFormComponent } from './components';
import { CanDeactivateGuard } from './../core';
import { UserResolveGuard } from './guards/user-resolve.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'add', component: UserFormComponent },
      {
        path: 'edit/:userID',
        component: UserFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: { user: UserResolveGuard }
      },
      { path: '', component: UserListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
  static components = [UsersComponent, UserListComponent, UserFormComponent];
}
