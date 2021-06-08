import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// rxjs
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserModel>>;

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
  }

  onEditUser(user: UserModel) {
    // const link = ['/users/edit', user.id];
    // this.router.navigate(link);

    // or

    const link = ['edit', user.id];
    this.router.navigate(link, {relativeTo: this.route});
  }
}
