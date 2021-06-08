import { Injectable } from '@angular/core';

// rxjs
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from './../models/user.model';

const userList: Array<UserModel> = [
  new UserModel(1, 'Harry', 'Potter'),
  new UserModel(2, 'Ron', 'Weasley'),
  new UserModel(3, 'Hermione', 'Granger'),
];

const userListObservable: Observable<Array<UserModel>> = of(userList);

@Injectable({
  providedIn: 'any',
})
export class UserArrayService {
  users$: Observable<UserModel[]> = userListObservable;

  getUser(id: number | string): Observable<UserModel | undefined> {
    return this.users$
      .pipe(
        map((users: Array<UserModel>) => users.find((user) => user.id === +id)),
        catchError(() => throwError('Error in getUser method'))
      );
  }

  createUser(user: UserModel): void {
    userList.push(user);
  }

  updateUser(user: UserModel): void {
    const i = userList.findIndex((u) => u.id === user.id);

    if (i > -1) userList.splice(i, 1, user);
  }
}
