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
import { SavingsProductDetailsComponent } from './savings-product/savings-product-details/savings-product-details.component';
import { NewSavingsProductComponent } from './savings-product/new-savings-product/new-savings-product.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { BorrowerDetailsComponent } from './loans/borrower-details/borrower-details.component';
import { LoanScheduleComponent } from './loans/loan-schedule/loan-schedule.component';
import { SaverDetailsComponent } from './savings/saver-details/saver-details.component';
import { SavingsDetailsComponent } from './savings/savings-details/savings-details.component';
import { ReportComponent } from './report/report.component';
import { DueLoansReportComponent } from './report/due-loans-report/due-loans-report.component';
import { LoanProductReportComponent } from './report/loan-product-report/loan-product-report.component';
import { MatureSavingsReportComponent } from './report/mature-savings-report/mature-savings-report.component';
import { OverdueLoansReportComponent } from './report/overdue-loans-report/overdue-loans-report.component';
import { SavingsProductReportComponent } from './report/savings-product-report/savings-product-report.component';
import { UsersReportComponent } from './report/users-report/users-report.component';

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
      { path: 'new-savings-product', component: NewSavingsProductComponent},
      { path: 'reports', component: ReportComponent},
      { path: 'reports/due-loans', component: DueLoansReportComponent},
      { path: 'reports/loan-product', component: LoanProductReportComponent},
      { path: 'reports/mature-savings', component: MatureSavingsReportComponent},
      { path: 'reports/overdue-loans', component: OverdueLoansReportComponent},
      { path: 'reports/savings-product', component: SavingsProductReportComponent},
      { path: 'reports/users', component: UsersReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
