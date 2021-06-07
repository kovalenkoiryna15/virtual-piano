import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent, NoteFormComponent } from './components';

const routes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'edit/:noteID', component: NoteFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
