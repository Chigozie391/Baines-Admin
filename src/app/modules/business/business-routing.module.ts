import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CollectionComponent } from './collection/collection.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { BusinessComponent } from './business.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { SavingsProductComponent } from './savings-product/savings-product.component';
import { LoansComponent } from './loans/loans.component';
import { SavingsComponent } from './savings/savings.component';
import { LoanProductDetailsComponent } from './loan-product/loan-product-details/loan-product-details.component';
import { NewLoanProductComponent } from './loan-product/new-loan-product/new-loan-product.component';

const routes: Routes = [
  {
    path: '', component: BusinessComponent, children: [
      { path: 'transactions', component: TransactionComponent },
      { path: 'transactions/:id', component: TransactionDetailsComponent },
      { path: 'collections', component: CollectionComponent },
      { path: 'loan-product', component: LoanProductComponent },
      { path: 'loan-product/:id', component: LoanProductDetailsComponent},
      { path: 'general', component: LoanProductDetailsComponent},
      { path: 'save', component: LoanProductDetailsComponent},
      { path: 'savings-product', component: SavingsProductComponent },
      { path: 'loans', component: LoansComponent },
      { path: 'savings', component: SavingsComponent },
      { path: 'new-loan-product', component: NewLoanProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
