import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { CollectionComponent } from './collection/collection.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { LoansComponent } from './loans/loans.component';
import { SavingsComponent } from './savings/savings.component';
import { SavingsProductComponent } from './savings-product/savings-product.component';
import { LoanProductDetailsComponent } from './loan-product/loan-product-details/loan-product-details.component';
import { NewLoanProductComponent } from './loan-product/new-loan-product/new-loan-product.component';
import { SavingsProductDetailsComponent } from './savings-product/savings-product-details/savings-product-details.component';
import { NewSavingsProductComponent } from './savings-product/new-savings-product/new-savings-product.component';

@NgModule({
  declarations: [BusinessComponent,TransactionComponent, CollectionComponent, LoanProductComponent, TransactionDetailsComponent, LoansComponent, SavingsComponent, SavingsProductComponent, LoanProductDetailsComponent, NewLoanProductComponent, SavingsProductDetailsComponent, NewSavingsProductComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
