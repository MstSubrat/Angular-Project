import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCentricRoutingModule } from './customer-centric-routing.module';
import { CustVarianceComponent } from './cust-variance/cust-variance.component';
import { IndustryVerticalsComponent } from './industry-verticals/industry-verticals.component';
import { OpsMboComponent } from './ops-mbo/ops-mbo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallBridgeComponent } from './call-bridge/call-bridge.component';


@NgModule({
  declarations: [
    CustVarianceComponent,
    IndustryVerticalsComponent,
    OpsMboComponent,
    CallBridgeComponent,
  ],
  imports: [
    CommonModule,
    CustomerCentricRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerCentricModule { }
