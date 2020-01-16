import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApisComponent } from './apis/apis.component';
import { AuditComponent } from './audit/audit.component';
import { AuditDetailsComponent } from './audit/audit-details/audit-details.component';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';

@NgModule({
  declarations: [
    PortalComponent, 
    DashboardComponent, 
    UsersComponent, 
    ApisComponent, 
    AuditComponent, 
    AuditDetailsComponent,
    InnerLastNamePipe
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ]
})
export class PortalModule { }
