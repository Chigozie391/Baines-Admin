import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LendersComponent } from './lenders/lenders.component';
import { CustomersComponent } from './customers.component';
import { LendersViewComponent } from './lenders-view/lenders-view.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { BorrowersViewComponent } from './borrowers-view/borrowers-view.component';
import { SaversComponent } from './savers/savers.component';
import { SaversViewComponent } from './savers-view/savers-view.component';
import { SavingsComponent } from './savers-details/savings/savings.component';
import { BankDetailsComponent } from './savers-details/bank-details/bank-details.component';
import { SavingsDetailsComponent } from './savers-details/savings-details/savings-details.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent, children: [
      {path: 'lenders', component: LendersComponent},
      {path: 'lenders/view', component: LendersViewComponent},
      {path: 'borrowers', component: BorrowersComponent},
      {path: 'borrowers/view', component: BorrowersViewComponent},
      {path: 'savers', component: SaversComponent},
      {path: 'savers/:id', component: SaversViewComponent},
      {path: 'savers/:id/general', component: SaversViewComponent},
      {path: 'savers/:id/savings', component: SavingsComponent},
      {path: 'savers/:id/bank-details', component: BankDetailsComponent},
      {path: 'savers/:id/savings/:id', component: SavingsDetailsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
