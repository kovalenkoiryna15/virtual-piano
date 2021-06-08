import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [CommonModule, FormsModule, MatGridListModule, MatCardModule, MatButtonModule],
})
export class LayoutModule {}
