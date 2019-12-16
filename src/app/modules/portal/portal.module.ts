import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApisComponent } from './apis/apis.component';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent, UsersComponent, ApisComponent, AuditComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
