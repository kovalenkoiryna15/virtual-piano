import { v4 } from "uuid";

export class UserModel {
  constructor(
    public id: number = Number(v4()),
    public firstName: string = 'First Name',
    public lastName: string = 'Last Name'
  ) {}
}
