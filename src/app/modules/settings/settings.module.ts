import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { BankInformationComponent } from './bank-information/bank-information.component';
import { SharedModule } from '../shared/shared.module';
import { PreferenceComponent } from './preference/preference.component';

@NgModule({
  declarations: [SettingsComponent, BankInformationComponent, PreferenceComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
