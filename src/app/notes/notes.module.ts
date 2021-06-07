import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';

import { NoteListComponent, NoteComponent, NoteFormComponent  } from './components';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NoteComponent,
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class NoteModule { }
