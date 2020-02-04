import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { Constant } from 'src/app/utils/constant';
import { LoanProductModel } from '../new-loan-product/new-loan-product.model';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-edit-loan-product',
  templateUrl: './edit-loan-product.component.html',
  styleUrls: ['./edit-loan-product.component.scss']
})
export class EditLoanProductComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  tenor: any;
  model: any;
  method: any;
  loanProduct = new LoanProductModel();
  msg: String;
  id: String;

  constructor(private route: ActivatedRoute,
     private loanProductService: LoanProductService,
     private authService: AuthService) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  ngOnInit() {
    this.details(this.id);
    this.getTenor();
    this.getRepaymentMethod();
    this.getRepaymentModel();
  }

  details(id){
    this.loanProductService.getProductDetails(id).subscribe((res:any) => {
      console.log(res.data);
      if (res.status === Constant.SUCCESS){
        this.loanProduct.name = res.data.name;
        this.loanProduct.max_amount = res.data.max_amount;
        this.loanProduct.min_amount = res.data.min_amount;
        this.loanProduct.interest_rate = res.data.interest_rate;
        // this.loanProduct.tenor_type = res.data.tenor_types;
        // this.loanProduct.repayment_method_id = res.data.repayment_method.name;
        // this.loanProduct.repayment_model_id = res.data.repayment_model.name
      }
    });
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

  editProduct() {
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
    console.log(data);
    // this.loanProductService.editLoanProduct(this.id, data).subscribe((res :any) => {
    //   if(res.status === Constant.SUCCESS) {
    //     this.msg = res.message;
    //   }
    //   console.log(res);
    // }, (err) => {
    //   if(err.status !== 200){
    //     this.msg = err.error.message;
    //   }
    // });
  }
}
