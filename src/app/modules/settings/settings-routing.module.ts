import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }