import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrayRoutingModule } from './stray-routing.module';
import { StrayQueryComponent } from './stray-query/stray-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StrayEntryComponent } from './stray-entry/stray-entry.component';
import { DownloadCsvComponent } from './download-csv/download-csv.component';


@NgModule({
  declarations: [
    StrayEntryComponent,
    StrayQueryComponent,
    DownloadCsvComponent
  ],
  imports: [
    CommonModule,
    StrayRoutingModule,
    ReactiveFormsModule
  ]
})
export class StrayModule { }
