import { Component, OnInit } from '@angular/core';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/model/loan-product.model';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-loan-product',
  templateUrl: './loan-product.component.html',
  styleUrls: ['./loan-product.component.scss']
})
export class LoanProductComponent implements OnInit {

  loanProduct: any;

  constructor( private loanProductService: LoanProductService) { }

  ngOnInit() {
    this.getLoanProduct();
  }

  getLoanProduct(){
    this.loanProductService.getLoanProducts().subscribe((res:any)=> {
      if (res.status === Constant.SUCCESS) {
        this.loanProduct = res.data;
      }
    }, (err) => {
      console.log(err);
    });
  }



}
