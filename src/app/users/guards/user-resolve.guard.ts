import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take, delay, finalize } from 'rxjs/operators';
import { UserModel } from './../models/user.model';
import { UserArrayService } from './../services/user-array.service';
import { SpinnerService } from './../../widgets';

@Injectable({
  providedIn: 'any'
})
export class UserResolveGuard implements Resolve<UserModel | null> {
  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private spinner: SpinnerService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserModel | null> {
    if (!route.paramMap.has('userID')) {
      return of(new UserModel());
    }

    this.spinner.show();
    const id = +route.paramMap.get('userID')!;

    return this.userArrayService.getUser(id).pipe(
      delay(2000),
      map((user: UserModel | undefined) => {
        if (user) {
          return user;
        } else {
          this.router.navigate(['/users']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/users']);
        // catchError MUST return observable
        return of(null);
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
