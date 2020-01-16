import { Component, OnInit } from '@angular/core';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { LoanProductModel } from 'src/app/model/loan-product.model';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-loan-product',
  templateUrl: './loan-product.component.html',
  styleUrls: ['./loan-product.component.scss']
})
export class LoanProductComponent implements OnInit {

  loanProduct: any;
  msg: any;
  Stats: any;
  config: any;


  constructor( private loanProductService: LoanProductService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getLoanProduct();
    this.loanStat();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getLoanProduct(){
    this.loanProductService.getLoanProducts().subscribe((res:any)=> {
      if (res.status === Constant.SUCCESS) {
        this.loanProduct = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }

  loanStat(){
    this.loanProductService.getLoanStats().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.Stats = res.data[0];
      }
    });
  }


}
