import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// rxjs
import { Subscription } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: UserModel | null = null;
  originalUser: UserModel | null = null;
  private sub!: Subscription;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
      } else {
        this.userArrayService.createUser(user);
      }

      this.originalUser = { ...this.user };
      this.onGoBack();
    }
  }

  onGoBack() {
    this.router.navigate(['users']);
  }
}
