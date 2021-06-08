import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class AdminModule {}
