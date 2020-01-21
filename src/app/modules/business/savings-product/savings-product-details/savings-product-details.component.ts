import { Component, OnInit } from '@angular/core';
import { SavingsProductService } from 'src/app/service/savings-product/savings-product.service';
import { Constant } from 'src/app/utils/constant';
import { ActivatedRoute } from '@angular/router';
import { FirstNamePipe } from 'src/app/filterPipes/byFirstname/first-name.pipe';

@Component({
  selector: 'app-savings-product-details',
  templateUrl: './savings-product-details.component.html',
  styleUrls: ['./savings-product-details.component.scss'],
  providers: [FirstNamePipe]
})
export class SavingsProductDetailsComponent implements OnInit {

  details: any;
  savers: any;
  dataSet = [];
  id: any;
  term: any;
  config: any;

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
        this.savers = res.data.report;

        for(let i = 0; i < res.data.report.length; i++){
          const data = {
            'user_id' : res.data.report[i].user_id,
            'full_name' : `${res.data.report[i].first_name} ${res.data.report[i].last_name}`,
            'savings_count' : res.data.report[i].savings_count,
            'total' : res.data.report[i].total
          }
          this.savers = this.dataSet.push(data);
        }
      }
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
