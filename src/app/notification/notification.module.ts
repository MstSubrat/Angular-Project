import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationEntryComponent } from './notification-entry/notification-entry.component';
import { MaterialModule } from 'src/Material.Module';


@NgModule({
  declarations: [
    NotificationEntryComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule,
    ]
})
export class NotificationModule { }
