import { Injectable } from '@angular/core';

import { Note } from './../models/note.model';

const noteList = [
  new Note(1, 'Estimate', 1, 8, 8, true),
  new Note(2, 'Create', 2, 8, 4, false),
  new Note(3, 'Deploy', 3, 8, 0, false)
];

const noteListPromise = Promise.resolve(noteList);

@Injectable({
  providedIn: 'any'
})
export class NoteArrayService {

  getNotes(): Promise<Note[]> {
    return noteListPromise;
  }

  getNote(id: number): Promise<Note | undefined> {
    return this.getNotes()
      .then(notes => notes.find(note => note.id === id))
      .catch(() => Promise.reject('Error in getTask method'));
  }

  createNote(note: Note): void {
    noteList.push(note);
  }

  updateNote(note: Note): void {
    const i = noteList.findIndex(n => n.id === note.id);
    if (i > -1) noteList.splice(i, 1, note);
  }

  deleteNote(note: Note): void {
    const i = noteList.findIndex(n => n.id === note.id);
    if (i > -1) noteList.splice(i, 1);
  }

}
