import { v4 } from 'uuid';

export class Note {
  constructor(
    public id: number = Number(v4()),
    public action: string = '',
    public priority: number = 0,
    public estHours: number = 0,
    public actHours?: number,
    public done?: boolean
  ) {
    this.actHours = actHours || 0;
    this.done = done || false;
  }
}
