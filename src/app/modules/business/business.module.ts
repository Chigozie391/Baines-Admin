import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { CollectionComponent } from './collection/collection.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BusinessComponent,TransactionComponent, CollectionComponent, LoanProductComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
