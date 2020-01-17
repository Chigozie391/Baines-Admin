import { Component, OnInit } from '@angular/core';
import { SaversService } from 'src/app/service/savers/savers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-savings-details',
  templateUrl: './savings-details.component.html',
  styleUrls: ['./savings-details.component.scss']
})
export class SavingsDetailsComponent implements OnInit {

  savings_id: any;
  savings_details: any;
  saving_transactions: any;

  constructor(private saversService: SaversService,
    private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      this.savings_id = params.get("id");
    });
  }

  ngOnInit() {
    this.eachSavingsDetail(this.savings_id);
  }

  eachSavingsDetail(savings_id) {
    this.saversService.getSavingsDetails(savings_id).subscribe((res: any) => {
      this.savings_details = res.data;
      this.saving_transactions = res.data.saving_transactions;
      console.log(res.data);
    });
  }

}
