import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./modules/portal/portal.module').then(mod => mod.PortalModule)
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {path: '', redirectTo: '/auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
