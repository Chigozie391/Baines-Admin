import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CollectionComponent } from './collection/collection.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { BusinessComponent } from './business.component';
<<<<<<< HEAD
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { SavingsProductComponent } from './savings-product/savings-product.component';
import { LoansComponent } from './loans/loans.component';
import { SavingsComponent } from './savings/savings.component';
import { LoanProductDetailsComponent } from './loan-product/loan-product-details/loan-product-details.component';
import { NewLoanProductComponent } from './loan-product/new-loan-product/new-loan-product.component';
import { SavingsProductDetailsComponent } from './savings-product/savings-product-details/savings-product-details.component';
import { NewSavingsProductComponent } from './savings-product/new-savings-product/new-savings-product.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { BorrowerDetailsComponent } from './loans/borrower-details/borrower-details.component';
import { LoanScheduleComponent } from './loans/loan-schedule/loan-schedule.component';
import { SaverDetailsComponent } from './savings/saver-details/saver-details.component';
import { SavingsDetailsComponent } from './savings/savings-details/savings-details.component';
=======
>>>>>>> 2157538685f6408fc442fd0e90c2587d5f8433a8

const routes: Routes = [
  {
    path: '', component: BusinessComponent, children: [
      { path: 'transactions', component: TransactionComponent },
<<<<<<< HEAD
      { path: 'transactions/:id', component: TransactionDetailsComponent },
      { path: 'collections', component: CollectionComponent },
      { path: 'loan-product', component: LoanProductComponent },
      { path: 'loan-product/:id', component: LoanProductDetailsComponent},
      { path: 'general', component: LoanProductDetailsComponent},
      { path: 'save', component: LoanProductDetailsComponent},
      { path: 'savings-product', component: SavingsProductComponent },
      { path: 'savings-product/:id', component: SavingsProductDetailsComponent},
      { path: 'loans', component: LoansComponent },
      { path: 'loans/:id', component: BorrowerDetailsComponent},
      { path: 'loans/:id/loan-details', component: LoanDetailsComponent },
      { path: 'loans/:id/borrower-details', component: BorrowerDetailsComponent},
      { path: 'loans/:id/loan-schedule', component: LoanScheduleComponent},
      { path: 'savings', component: SavingsComponent },
      { path: 'savings/:id', component: SaverDetailsComponent },
      { path: 'savings/:id/saver-details', component: SaverDetailsComponent },
      { path: 'savings/:id/savings-details', component: SavingsDetailsComponent },
      { path: 'new-loan-product', component: NewLoanProductComponent},
      { path: 'new-savings-product', component: NewSavingsProductComponent}
=======
      { path: 'collections', component: CollectionComponent },
      { path: 'loan-product', component: LoanProductComponent },
>>>>>>> 2157538685f6408fc442fd0e90c2587d5f8433a8
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
