import { Component, OnInit } from '@angular/core';
import { LoanProductService } from 'src/app/service/loan-product/loan-product.service';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-loan-product-details',
  templateUrl: './loan-product-details.component.html',
  styleUrls: ['./loan-product-details.component.scss']
})
export class LoanProductDetailsComponent implements OnInit {

  details: any;
  borrowers: any;
  id: any;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
     private loanProductService: LoanProductService) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  checkDetails() {
    this.loanProductService.getProductDetails(this.id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.details = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }


  ngOnInit() {
    this.checkDetails();
  }

}
