import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/Material.Module';
import { MISScheduleReportComponent } from './mis-schedule-report/mis-schedule-report.component';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { DatePipe } from '@angular/common';
import { AuthGuard } from './Guard/auth.guard';
import { CapxComponent } from './capx/capx.component';
import { AwbListingRptComponent } from './awb-listing-rpt/awb-listing-rpt.component';
import { NotificationRoutingModule } from './notification/notification-routing.module';
import { NotificationModule } from './notification/notification.module';
import { CustomerCentricRoutingModule } from './customer-centric/customer-centric-routing.module';
import { CustomerCentricModule } from './customer-centric/customer-centric.module';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { StrayRoutingModule } from './stray/stray-routing.module';
import { StrayModule } from './stray/stray.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MISScheduleReportComponent,
    CapxComponent,
    AwbListingRptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    MaterialModule,
    NotificationRoutingModule,
    NotificationModule,
    CustomerCentricRoutingModule,
    FontAwesomeModule,
    StrayRoutingModule,
    StrayModule
    // DataTablesModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    DatePipe,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
