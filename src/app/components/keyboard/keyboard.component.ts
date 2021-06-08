import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/core/models/key.model';
import { KeysService } from 'src/app/core/services';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  public keys: Array<Key> = [];

  constructor(private keyService: KeysService) {}

  ngOnInit(): void {
    this.keys = this.keyService.getKeys();
  }
}
