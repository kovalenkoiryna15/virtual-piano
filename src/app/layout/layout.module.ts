import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, HomeComponent, PathNotFoundComponent } from './components';
import { KeyboardComponent } from '../components/keyboard/keyboard.component';
import { KeyComponent } from '../components/key/key.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PathNotFoundComponent, KeyboardComponent, KeyComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
