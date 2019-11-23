import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
