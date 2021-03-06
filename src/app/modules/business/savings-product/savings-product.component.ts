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

  activate(id){
    const data = {
      'status' : "1"
    }
    this.msg = 'Activating...'
    this.savingsProductService.updateProductStatus(id,data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.getSavingsProduct();
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
    this.savingsProductService.updateProductStatus(id, data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.getSavingsProduct();
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
