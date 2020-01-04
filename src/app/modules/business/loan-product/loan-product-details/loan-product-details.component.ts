import { Component, OnInit } from '@angular/core';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-loan-product-details',
  templateUrl: './loan-product-details.component.html',
  styleUrls: ['./loan-product-details.component.scss']
})
export class LoanProductDetailsComponent implements OnInit {

  details: any;
  borrowers: any;
  id: any;

  constructor(private route: ActivatedRoute, private loanProductService: LoanProductService) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  checkDetails() {
    this.loanProductService.getProductDetails(this.id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.details = res.data;
      }
    });
  }


  ngOnInit() {
    this.checkDetails();
  }

}
