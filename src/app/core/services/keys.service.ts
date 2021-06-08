import { Injectable } from '@angular/core';
import { Key } from '../models/key.model';

import mockKeys from '../mocks/piano-keys.json';

@Injectable({
  providedIn: 'root',
})
export class KeysService {
  constructor() {}

  getKeys(): Array<Key> {
    return mockKeys.keys.firstOctave.keys;
  }
}
