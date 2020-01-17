import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyUserComponent } from './verify-user/verify-user/verify-user.component';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./modules/portal/portal.module').then(mod => mod.PortalModule)
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {path: '', redirectTo: '/auth', pathMatch:'full'},

  { path: 'team/verify', component: VerifyUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
