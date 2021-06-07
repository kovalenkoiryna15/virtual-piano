import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';

import { NoteListComponent, NoteComponent } from './components';


@NgModule({
  declarations: [
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule
  ]
})
export class NoteModule { }
