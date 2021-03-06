import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyUserComponent } from './verify-user/verify-user/verify-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./modules/portal/portal.module').then(mod => mod.PortalModule)
  },
  {
    path: '', loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  // {path: '', redirectTo: '/auth', pathMatch:'full'},

  { path: 'team/verify', component: VerifyUserComponent},

  { path: 'team/reset', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
