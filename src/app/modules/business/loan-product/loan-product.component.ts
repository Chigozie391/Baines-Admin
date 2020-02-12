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
      console.log(res);
      if (res.status === Constant.SUCCESS) {
        this.loanProduct = res.data;
        // this.loanProductService.getProductDetails(res.data.id).subscribe((count: any) => {
        //   console.log(count);
        // })
      }
    }, (err) => {
      if(err.status === 401){
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


  activate(id){
    const data = {
      'status' : "1"
    }
    this.msg = 'Activating...'
    this.loanProductService.updateProductStatus(id, data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.getLoanProduct();

      }
    }, (err) => {
      if (err.status !== 401) {
        this.msg = err.error.message;
      }
    });
  }

  deactivate(id){
    const data = {
      'status' : "0"
    }
    this.msg = 'Deactivating...'
    this.loanProductService.updateProductStatus(id, data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.getLoanProduct();
      }
    }, (err) => {
      if (err.status !== 401) {
        this.msg = err.error.message;
      }
    });
  }

  onClosed() {
    this.msg = '';
  }
}
