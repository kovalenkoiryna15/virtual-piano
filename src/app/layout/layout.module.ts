import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';

import {
  AboutComponent,
  HomeComponent,
  PathNotFoundComponent,
  MessagesComponent,
} from './components';
import { KeyboardComponent } from '../components/keyboard/keyboard.component';
import { KeyComponent } from '../components/key/key.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PathNotFoundComponent,
    KeyboardComponent,
    KeyComponent,
    MessagesComponent,
  ],
  imports: [CommonModule, FormsModule, MatGridListModule],
})
export class LayoutModule {}
