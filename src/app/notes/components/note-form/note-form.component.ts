import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Note } from './../../models/note.model';
import { NoteArrayService } from './../../services/note-array.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  note!: Note;

  constructor(
    private noteArrayService: NoteArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.note = new Note();

    const observer = {
      next: (note: Note | undefined) => {
        if (note) this.note = { ...this.note, ...note };
      },
      error: (err: any) => console.log(err),
      complete: () => {},
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.noteArrayService.getNote(+params.get('noteID')!)
        )
      )
      .subscribe(observer);
  }

  onSaveNote() {
    const note = { ...this.note } as Note;
    if (note.id) {
      this.noteArrayService.updateNote(note);
    } else {
      this.noteArrayService.createNote(note);
    }
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/notes']);
  }
}
