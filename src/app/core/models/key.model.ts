/**
 * Key Model
 */
export class Key {
  constructor(
    public note: string,
    public letter: string,
    public audio: string,
    public code: string,
    public sharp?: boolean
  ) {}
}
