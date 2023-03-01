import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadCsvComponent } from './download-csv/download-csv.component';
import { StrayEntryComponent } from './stray-entry/stray-entry.component';
import { StrayQueryComponent } from './stray-query/stray-query.component';

const routes: Routes = [
  {path:"query",component:StrayQueryComponent},
  {path:"strayentry",component: StrayEntryComponent},
  {path:"csv",component:DownloadCsvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrayRoutingModule { }
