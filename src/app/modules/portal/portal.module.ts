import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApisComponent } from './apis/apis.component';
<<<<<<< HEAD
import { AuditComponent } from './audit/audit.component';
import { AuditDetailsComponent } from './audit/audit-details/audit-details.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent, UsersComponent, ApisComponent, AuditComponent, AuditDetailsComponent],
=======
import { AuditComponent } from './audit/audit.component';

@NgModule({
  declarations: [PortalComponent, DashboardComponent, UsersComponent, ApisComponent, AuditComponent],
>>>>>>> 2157538685f6408fc442fd0e90c2587d5f8433a8
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
