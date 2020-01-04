import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/utils/constant';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';

@Component({
  selector: 'app-savings-product',
  templateUrl: './savings-product.component.html',
  styleUrls: ['./savings-product.component.scss']
})
export class SavingsProductComponent implements OnInit {

  savingsProduct: any;

  constructor(private savingsProductService: SavingsProductService) { }

  ngOnInit() {
    this.getSavingsProduct();
  }

  getSavingsProduct(){
    this.savingsProductService.getSavingsProduct().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.savingsProduct = res.data;
      }
    });
  }

}
