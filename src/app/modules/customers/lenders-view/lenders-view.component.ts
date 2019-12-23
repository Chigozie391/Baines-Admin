import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/utils/path';
import { LendersService } from 'src/app/service/lenders/lenders.service';
import { Constant } from 'src/app/utils/constant';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/model/loan-product.model';

@Component({
  selector: 'app-lenders-view',
  templateUrl: './lenders-view.component.html',
  styleUrls: ['./lenders-view.component.scss']
})
export class LendersViewComponent implements OnInit {

  lender: any;
  lenderName: string;
  invited: any = [];
  loading: boolean;
  loanModel = new LoanProductModel();
  loadingProduct: boolean;
  loanProduct: any = [];

  constructor(private router: Router, private lendersService: LendersService, private loanProductService: LoanProductService) {

  }

  ngOnInit() {
    this.getLenderState()
  }

  getLenderState() {
    this.lender = history.state.data;
    if (!this.lender) {
      this.router.navigate([Path.LENDER]);
      return
    }
    else {
      this.showName();
      this.loanModel.profile_id = this.lender.id;
      this.invitedBorrowers();
      this.getLoanProduct();
    }

  }

  showName() {
    !this.lender.user.last_name && this.lender.user.first_name ?
      this.lenderName = this.lender.user.business_name :
      this.lenderName = `${this.lender.user.last_name} ${this.lender.user.first_name}`;
  }

  invitedBorrowers() {
    this.loading = true;
    this.lendersService.getBorrowersFromALender(this.lender.user_id).subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.invited = res.data.profiles;
      }
    }, err => {
      this.loading = false;
      console.log(err)
    })
  }

  getLoanProduct() {
    this.loadingProduct = true;
    console.log(this.loanModel);
    this.loanProductService.loanProduct(this.loanModel).subscribe((res: any) => {
      this.loadingProduct = false;
      if (res.status === Constant.SUCCESS) {
        this.loanProduct = res.data.products;
      }
    }, err => {
      console.log(err)
      this.loadingProduct = false;
    })
  }

}
