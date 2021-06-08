import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from '../../../core/services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  message = '';

  constructor(
    public messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  onClose() {
    this.router.navigate([{ outlets: { messages: null } }]);

    this.messagesService.isDisplayed = false;
  }

  onSend() {
    if (this.message) {
      this.messagesService.addMessage(this.message);

      this.message = '';
    }
  }
}
