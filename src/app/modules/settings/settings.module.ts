import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { BankInformationComponent } from './bank-information/bank-information.component';
import { SharedModule } from '../shared/shared.module';
import { PreferenceComponent } from './preference/preference.component';
import { AccountComponent } from './account/account.component';
import { TeamComponent } from './team/team.component';
import { ManageComponent } from './team/manage/manage.component';
import { InviteComponent } from './team/invite/invite.component';

@NgModule({
  declarations: [SettingsComponent, BankInformationComponent, PreferenceComponent, AccountComponent, TeamComponent, ManageComponent, InviteComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
