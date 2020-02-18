import { Component, OnInit } from '@angular/core';
import { SavingsProductModel } from '../new-savings-product/new-savings-product.model';
import { Constant } from 'src/app/utils/constant';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-edit-savings-product',
  templateUrl: './edit-savings-product.component.html',
  styleUrls: ['./edit-savings-product.component.scss']
})
export class EditSavingsProductComponent implements OnInit {

  savingsProduct = new SavingsProductModel;
  id: string;
  isLinear = false;
  firstFormGroup: FormGroup;
  tenor: any;
  model: any;
  method: any;
  msg: String;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private savingsProductService: SavingsProductService) { 
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
    this.savingsProductService.getProductDetails(id).subscribe((res:any) => {
      if (res.status === Constant.SUCCESS){
        this.savingsProduct.name = res.data.name;
        this.savingsProduct.description = res.data.description;
        this.savingsProduct.max_amount = res.data.max_amount;
        this.savingsProduct.min_amount = res.data.min_amount;
        this.savingsProduct.interest_rate = res.data.interest_rate;
        this.savingsProduct.penal_charge = res.data.penal_charge_rate;
        this.savingsProduct.withholding_tax = res.data.withholding_tax_rate;
        this.savingsProduct.fixed = res.data.is_fixed;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
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

  editProduct() {
    this.msg = 'Saving Changes...'
    const data = {
      "name": this.savingsProduct.name,
      "min_amount": this.savingsProduct.min_amount,
      "max_amount": this.savingsProduct.max_amount,
      "interest_rate": this.savingsProduct.interest_rate,
      "description": this.savingsProduct.description,
      "product_type_id": 1,
      "repayment_method_id": this.savingsProduct.repayment_method_id,
      "repayment_model_id": this.savingsProduct.repayment_model_id,  
      "penal_charge_rate": this.savingsProduct.penal_charge,
      "is_fixed": this.savingsProduct.fixed ? this.savingsProduct.fixed = 1 : this.savingsProduct.fixed = 0,
      "withholding_tax_rate": this.savingsProduct.withholding_tax,
      "tenor_types": [
        {
        "id": this.savingsProduct.tenor_type.id
        }	
          ]
      };

    this.savingsProductService.editSavingsProduct(this.id, data).subscribe((res :any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

}
