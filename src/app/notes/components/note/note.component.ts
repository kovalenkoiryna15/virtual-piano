import { Component, OnInit, ChangeDetectionStrategy,  EventEmitter, Input, Output, } from '@angular/core';
import { Note } from './../../models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  @Output() completeNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();

  onCompleteNote(): void {
    this.completeNote.emit(this.note);
  }

  onEditNote() {
    this.editNote.emit(this.note);
  }

  ngOnInit() {}

}
