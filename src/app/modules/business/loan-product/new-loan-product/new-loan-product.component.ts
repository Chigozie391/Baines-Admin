import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/modules/business/loan-product/new-loan-product/new-loan-product.model';

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
              private loanProductService: LoanProductService) { }

  ngOnInit() {

    this.getTenor();
    this.getRepaymentMethod();
    this.getRepaymentModel();
  }

  getTenor() {
    this.loanProductService.getTenor().subscribe((res: any) => {
      console.log(res.data);
      this.tenor = res.data;
    });
  }

  getRepaymentModel() {
    this.loanProductService.getRepaymentModel().subscribe((res: any) => {
      console.log(res.data);
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
      console.log(res.status);
      this.msg = res.message;
      // console.log(this.msg);
    });
  }



}
