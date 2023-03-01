import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwbListingRptComponent } from './awb-listing-rpt/awb-listing-rpt.component';

import { CapxComponent } from './capx/capx.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MISScheduleReportComponent } from './mis-schedule-report/mis-schedule-report.component';

const routes: Routes = [
  {path:"home", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:"mis-schedule-report", component:MISScheduleReportComponent,canActivate:[AuthGuard]},
  {path:"capx",component:CapxComponent},
  {path:"awb",component:AwbListingRptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
