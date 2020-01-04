import { Component, OnInit } from '@angular/core';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';
import { Constant } from 'src/app/utils/constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-savings-product-details',
  templateUrl: './savings-product-details.component.html',
  styleUrls: ['./savings-product-details.component.scss']
})
export class SavingsProductDetailsComponent implements OnInit {

  details: any;
  id: any;

  constructor(private route: ActivatedRoute, private savingsProductService: SavingsProductService) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(){
    this.savingsProductService.getProductDetails(this.id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.details = res.data;
      }
    });
  }

}
