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
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { BorrowerDetailsComponent } from './loans/borrower-details/borrower-details.component';
import { LoanScheduleComponent } from './loans/loan-schedule/loan-schedule.component';
import { SaverDetailsComponent } from './savings/saver-details/saver-details.component';
import { SavingsDetailsComponent } from './savings/savings-details/savings-details.component';

@NgModule({
  declarations: [BusinessComponent,TransactionComponent, CollectionComponent, LoanProductComponent, TransactionDetailsComponent, LoansComponent, SavingsComponent, SavingsProductComponent, LoanProductDetailsComponent, NewLoanProductComponent, SavingsProductDetailsComponent, NewSavingsProductComponent, LoanDetailsComponent, BorrowerDetailsComponent, LoanScheduleComponent, SaverDetailsComponent, SavingsDetailsComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
