import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationEntryComponent } from './notification-entry/notification-entry.component';

const routes: Routes = [
  {path:"entry",component:NotificationEntryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
