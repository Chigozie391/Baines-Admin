import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/modules/business/loan-product/new-loan-product/new-loan-product.model';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-new-loan-product',
  templateUrl: './new-loan-product.component.html',
  styleUrls: ['./new-loan-product.component.scss']
})
export class NewLoanProductComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  tenor: any;
  model: any;
  method: any;
  loanProduct = new LoanProductModel();
  msg: String;

  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
              private loanProductService: LoanProductService) { }

  ngOnInit() {

    this.getTenor();
    this.getRepaymentMethod();
    this.getRepaymentModel();
  }

  getTenor() {
    this.loanProductService.getTenor().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.tenor = res.data;
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  getRepaymentModel() {
    this.loanProductService.getRepaymentModel().subscribe((res: any) => {
      this.model = res.data;
    });
  }

  getRepaymentMethod(){
    this.loanProductService.getRepaymentMethods().subscribe((res: any) => {
      this.method = res.data;
    });
  }

  createProduct() {
    const data = {
      "name": this.loanProduct.name,
      "max_amount": this.loanProduct.max_amount,
      "min_amount": this.loanProduct.min_amount,
      "tenor_types": [{"id": this.loanProduct.tenor_type}],
      "repayment_method_id": this.loanProduct.repayment_method_id,
      "repayment_model_id": this.loanProduct.repayment_model_id,
      "interest_rate": this.loanProduct.interest_rate,
      "product_type_id": "2"
    };
    this.loanProductService.createLoanProduct(data).subscribe((res :any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });
  }



}
