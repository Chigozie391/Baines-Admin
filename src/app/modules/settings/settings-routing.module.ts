import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { BankInformationComponent } from './bank-information/bank-information.component';
import { PreferenceComponent } from './preference/preference.component';

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      {path: 'bank-information', component: BankInformationComponent},
      {path: 'preferences', component: PreferenceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }