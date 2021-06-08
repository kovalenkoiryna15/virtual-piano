import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: UserModel;
  @Output() editUser = new EventEmitter<UserModel>();

  constructor() {
    this.user = new UserModel();
  }

  onEditUser() {
    this.editUser.emit(this.user);
  }
}
