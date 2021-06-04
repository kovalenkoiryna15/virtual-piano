import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Key } from 'src/app/common/models/key.model';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
  @Input() key!: Key;

  isSharp: boolean = false;
  isPressed: boolean = false;
  audio?: HTMLAudioElement;

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.code === this.key.code) {
      this.isPressed = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === this.key.code) {
      if (!this.isPressed) {
        this.isPressed = true;
        this.play();
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.isSharp = !!this.key.sharp;
  }

  onClick(): void {
    this.play();
  }

  private play(): void {
    this.audio = new Audio('../../../assets/audio/' + this.key.audio);
    this.audio.load();
    this.audio.play();
  }
}
