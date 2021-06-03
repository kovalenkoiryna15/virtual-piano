import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/common/models/key.model';
import { KeysService } from 'src/app/services/keys.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  public keys: Array<Key> = [];

  constructor(private keyService: KeysService) { }

  ngOnInit(): void {
    this.keys = this.keyService.getKeys();
  }

}
