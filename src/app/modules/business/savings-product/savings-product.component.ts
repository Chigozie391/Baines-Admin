import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Constant } from 'src/app/utils/constant';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-savings-product',
  templateUrl: './savings-product.component.html',
  styleUrls: ['./savings-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SavingsProductComponent implements OnInit {

  savingsProduct: any;
  Stats: any;
  msg: any;

  constructor(
    private savingsProductService: SavingsProductService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getSavingsProduct();
    this.savingsStat();
  }

  getSavingsProduct(){
    this.savingsProductService.getSavingsProduct().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.savingsProduct = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }

  savingsStat(){
    this.savingsProductService.getSavingsStats().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.Stats = res.data[0];
      }
    });
  }

}
