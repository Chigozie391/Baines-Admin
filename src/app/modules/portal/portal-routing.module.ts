import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: PortalComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'customers', loadChildren: () => import('../customers/customers.module').then(mod => mod.CustomersModule)
      },
      {
        path: 'business', loadChildren: () => import('../business/business.module').then(mod => mod.BusinessModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
