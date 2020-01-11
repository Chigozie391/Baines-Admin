import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SavingsProductModel } from 'src/app/modules/business/savings-product/new-savings-product/new-savings-product.model';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-new-savings-product',
  templateUrl: './new-savings-product.component.html',
  styleUrls: ['./new-savings-product.component.scss']
})
export class NewSavingsProductComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  tenor: any;
  method: any;
  model: any;
  msg: String;
  savingsProduct = new SavingsProductModel();  

  constructor(private _formBuilder: FormBuilder,
              private savingsProductService: SavingsProductService) { }

  ngOnInit() {
    this.getTenor();
    this.getRepaymentMethod();
    this.getRepaymentModel();
  }

  getTenor(){
    this.savingsProductService.getTenor().subscribe((res: any) => {
      this.tenor = res.data;
    });
  }

  getRepaymentModel() {
    this.savingsProductService.getRepaymentModel().subscribe((res: any) => {
      this.model = res.data;
    });
  }

  getRepaymentMethod() {
    this.savingsProductService.getRepaymentMethods().subscribe((res: any) => {
      this.method = res.data;
    });
  }

  createProduct(){
    const data = {
      "name": this.savingsProduct.name,
      "min_amount": this.savingsProduct.min_amount,
      "max_amount": this.savingsProduct.max_amount,
      "interest_rate": this.savingsProduct.interest_rate,
      "description": this.savingsProduct.description,
      "product_type_id": "1",
      "repayment_method_id": this.savingsProduct.repayment_method_id,
      "repayment_model_id": this.savingsProduct.repayment_method_id,
      "penal_charge_rate": this.savingsProduct.penal_charge,
      "is_fixed": this.savingsProduct.fixed ? this.savingsProduct.fixed = 1 : this.savingsProduct.fixed = 0,
      "withholding_tax_rate": this.savingsProduct.withholding_tax,
      "tenor_types": [{"id": this.savingsProduct.tenor_type}],
    };

    console.log(data);
    this.savingsProductService.createSavingsProduct(data).subscribe((res :any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        console.log(res);
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
        console.log(err);
      }
    });
  }
}
