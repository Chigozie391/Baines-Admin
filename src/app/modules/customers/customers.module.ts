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
import { SaversViewComponent } from './savers-view/savers-view.component';
import { SavingsComponent } from './savers-details/savings/savings.component';
import { BankDetailsComponent } from './savers-details/bank-details/bank-details.component';
import { SavingsDetailsComponent } from './savers-details/savings-details/savings-details.component';
import { LoansComponent } from './borrowers-details/loans/loans.component';
import { WalletComponent } from './borrowers-details/wallet/wallet.component';
import { BorrowersBankDetailsComponent } from './borrowers-details/bank-details/bank-details.component';
import { LoanDetailsComponent } from './borrowers-details/loan-details/loan-details.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  declarations: [CustomersComponent, LendersComponent, LendersViewComponent, BorrowersComponent, BorrowersViewComponent, SaversComponent, SaversViewComponent, SavingsComponent, BankDetailsComponent, SavingsDetailsComponent, BorrowersBankDetailsComponent, LoansComponent, WalletComponent, LoanDetailsComponent, UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
