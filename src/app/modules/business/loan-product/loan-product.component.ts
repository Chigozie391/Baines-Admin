import { Component, OnInit } from '@angular/core';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/model/loan-product.model';

@Component({
  selector: 'app-loan-product',
  templateUrl: './loan-product.component.html',
  styleUrls: ['./loan-product.component.scss']
})
export class LoanProductComponent implements OnInit {

  loanModel = new LoanProductModel();

  constructor( private loanProductService: LoanProductService) { 

    this.loanModel.page = 1;
    this.loanModel.limit = 10;
  }

  ngOnInit() {
    this.getLoanProduct();
  }

  getLoanProduct(){
    this.loanProductService.loanProduct(this.loanModel).subscribe((res:any)=> {
      console.log(res)
    }, err=> {

    })
  }

}
