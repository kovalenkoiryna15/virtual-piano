import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// rxjs
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserModel>>;
  private editedUser?: UserModel;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.users$ = of([]);
  }

  ngOnInit() {
    this.users$ = this.userArrayService.users$.pipe(
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );

    const observer = {
      next: (user: UserModel | undefined) => {
        if (user) this.editedUser = { ...user };
      },
      error: (err: any) => console.log(err),
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.userArrayService.getUser(+params.get('editedUserID')!)
        )
      )
      .subscribe(observer);
  }

  onEditUser(user: UserModel) {
    // const link = ['/users/edit', user.id];
    // this.router.navigate(link);

    // or

    const link = ['edit', user.id];
    this.router.navigate(link, { relativeTo: this.route });
  }

  isEdited(user: UserModel): boolean {
    if (this.editedUser) {
      return user.id === this.editedUser.id;
    }
    return false;
  }
}
