import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './components';

@NgModule({
  declarations: [UserComponent, UsersRoutingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
