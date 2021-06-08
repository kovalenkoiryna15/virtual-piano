import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

// rxjs
import { Subscription, Observable } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';
import { DialogService, CanComponentDeactivate } from './../../../core';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent
  implements OnInit, OnDestroy, CanComponentDeactivate
{
  user!: UserModel;
  originalUser!: UserModel;
  private sub!: Subscription;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.user = new UserModel();

    // !TODO recreate component because this code runs only once
    const id = +this.route.snapshot.paramMap.get('userID')!;

    const observer = {
      next: (user: UserModel | undefined) => {
        if (user) {
          this.user = { ...user };
          this.originalUser = { ...user };
        }
      },
      error: (err: any) => console.log(err),
    };

    this.sub = this.userArrayService.getUser(id).subscribe(observer);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSaveUser() {
    if (this.user) {
      const user = { ...this.user };

      if (user.id) {
        this.userArrayService.updateUser(user);
        this.router.navigate(['/users', { editedUserID: user.id }]);
      } else {
        this.userArrayService.createUser(user);
        this.onGoBack();
      }

      this.originalUser = { ...this.user };
    }
  }

  onGoBack() {
    this.router.navigate(['users']);
  }

  private getKeyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const flags = Object.keys(this.originalUser).map((key: any) => {
      const originalUserValue = this.getKeyValue<UserModel, keyof UserModel>(
        this.originalUser,
        key
      );
      const userValue = this.getKeyValue<UserModel, keyof UserModel>(
        this.user,
        key
      );

      if (originalUserValue === userValue) {
        return true;
      }

      return false;
    });
    if (flags && flags.every((el) => el)) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
