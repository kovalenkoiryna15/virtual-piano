import { Injectable } from '@angular/core';
import { Key } from '../common/models/key.model';

import mockKeys from '../mocks/piano-keys.json';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor() { }

  getTones(): Array<Key> {
    return mockKeys.keys.firstOctave.tones;
  }

  getSemiTones(): Array<Key> {
    return mockKeys.keys.firstOctave.semitones;
  }
}
