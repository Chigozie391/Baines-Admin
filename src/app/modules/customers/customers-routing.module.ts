import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LendersComponent } from './lenders/lenders.component';
import { CustomersComponent } from './customers.component';
import { LendersViewComponent } from './lenders-view/lenders-view.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { BorrowersViewComponent } from './borrowers-view/borrowers-view.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent, children: [
      {path: 'lenders', component: LendersComponent},
      {path: 'lenders/view', component: LendersViewComponent},
      {path: 'borrowers', component: BorrowersComponent},
      {path: 'borrowers/view', component: BorrowersViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
