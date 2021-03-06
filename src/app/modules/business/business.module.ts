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
import { ReportComponent } from './report/report.component';
import { LoanProductReportComponent } from './report/loan-product-report/loan-product-report.component';
import { SavingsProductReportComponent } from './report/savings-product-report/savings-product-report.component';
import { MatureSavingsReportComponent } from './report/mature-savings-report/mature-savings-report.component';
import { DueLoansReportComponent } from './report/due-loans-report/due-loans-report.component';
import { OverdueLoansReportComponent } from './report/overdue-loans-report/overdue-loans-report.component';
import { UsersReportComponent } from './report/users-report/users-report.component';
import { OverDueReportDetailsComponent } from './report/overdue-loans-report/details/details.component';
import { DueReportDetailsComponent } from './report/due-loans-report/details/details.component';
import { LoanReportDetailsComponent } from './report/loan-product-report/details/details.component';
import { MatureReportDetailsComponent } from './report/mature-savings-report/details/details.component';
import { SavingsReportDetailsComponent } from './report/savings-product-report/details/details.component';
import { UsersReportDetailsComponent } from './report/users-report/details/details.component';
import { TypePipe } from 'src/app/filterPipes/byType/type.pipe';
import { ByIdPipe } from 'src/app/filterPipes/byId/by-id.pipe';
import { FirstNamePipe } from 'src/app/filterPipes/byFirstname/first-name.pipe';
import { EditLoanProductComponent } from './loan-product/edit-loan-product/edit-loan-product.component';
import { EditSavingsProductComponent } from './savings-product/edit-savings-product/edit-savings-product.component';

@NgModule({
  declarations: [
     BusinessComponent,TransactionComponent,
     CollectionComponent, LoanProductComponent, 
     TransactionDetailsComponent, LoansComponent, 
     SavingsComponent, SavingsProductComponent, 
     LoanProductDetailsComponent, NewLoanProductComponent, 
     SavingsProductDetailsComponent, NewSavingsProductComponent, 
     LoanDetailsComponent, BorrowerDetailsComponent, 
     LoanScheduleComponent, SaverDetailsComponent, 
     SavingsDetailsComponent, ReportComponent, 
     LoanProductReportComponent, SavingsProductReportComponent, 
     MatureSavingsReportComponent, DueLoansReportComponent, 
     OverdueLoansReportComponent, UsersReportComponent, 
     OverDueReportDetailsComponent, DueReportDetailsComponent,
     LoanReportDetailsComponent, MatureReportDetailsComponent,
     SavingsReportDetailsComponent, UsersReportDetailsComponent,
     TypePipe,
     ByIdPipe,
     FirstNamePipe,
     EditLoanProductComponent,
     EditSavingsProductComponent
    ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
