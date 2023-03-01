import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallBridgeComponent } from './call-bridge/call-bridge.component';
import { CustVarianceComponent } from './cust-variance/cust-variance.component';
import { IndustryVerticalsComponent } from './industry-verticals/industry-verticals.component';
import { OpsMboComponent } from './ops-mbo/ops-mbo.component';

const routes: Routes = [
  {path:"variance",component:CustVarianceComponent},
  {path:"industry",component:IndustryVerticalsComponent},
  {path:"ops", component:OpsMboComponent},
  {path:"bridge",component:CallBridgeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCentricRoutingModule { }
