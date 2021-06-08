import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from './core/services';
import { SpinnerService } from './widgets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'virtual-piano';

  constructor(
    public messagesService: MessagesService,
    private router: Router,
    public spinnerService: SpinnerService
  ) {}

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { messages: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }
}
