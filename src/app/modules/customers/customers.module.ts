import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { LendersComponent } from './lenders/lenders.component';
import { SharedModule } from '../shared/shared.module';
import { LendersViewComponent } from './lenders-view/lenders-view.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { BorrowersViewComponent } from './borrowers-view/borrowers-view.component';
import { SaversComponent } from './savers/savers.component';

@NgModule({
  declarations: [CustomersComponent, LendersComponent, LendersViewComponent, BorrowersComponent, BorrowersViewComponent, SaversComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
