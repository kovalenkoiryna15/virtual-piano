import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from './../../models/note.model';
import { NoteArrayService } from './../../services/note-array.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes!: Promise<Array<Note>>;

  constructor(
    private noteArrayService: NoteArrayService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.notes = this.noteArrayService.getNotes();
  }

  onCompleteNote(note: Note): void {
    const updatedNote = { ...note, done: true };
    this.noteArrayService.updateNote(updatedNote);
  }

  onEditNote(note: Note): void {
    this.router.navigate(['/edit', note.id]);
  }
}
