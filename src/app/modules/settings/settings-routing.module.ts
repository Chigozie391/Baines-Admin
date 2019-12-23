import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { SettingsComponent } from './settings.component';
import { BankInformationComponent } from './bank-information/bank-information.component';
import { PreferenceComponent } from './preference/preference.component';
import { AccountComponent } from './account/account.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      {path: 'bank-information', component: BankInformationComponent},
      {path: 'preferences', component: PreferenceComponent},
      {path: 'account', component: AccountComponent},
      {path: 'team', component: TeamComponent}
    ]
  }
];
=======

const routes: Routes = [];
>>>>>>> 2157538685f6408fc442fd0e90c2587d5f8433a8

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class SettingsRoutingModule { }
=======
export class SettingsRoutingModule { }
>>>>>>> 2157538685f6408fc442fd0e90c2587d5f8433a8
