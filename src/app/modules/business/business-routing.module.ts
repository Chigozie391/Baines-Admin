import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CollectionComponent } from './collection/collection.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { BusinessComponent } from './business.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {
    path: '', component: BusinessComponent, children: [
      { path: 'transactions', component: TransactionComponent },
      { path: 'transactions/:id', component: TransactionDetailsComponent },
      { path: 'collections', component: CollectionComponent },
      { path: 'loan-product', component: LoanProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
