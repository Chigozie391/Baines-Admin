import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SavingsService } from 'src/app/service/savings/savings.service';

@Component({
  selector: 'app-saver-details',
  templateUrl: './saver-details.component.html',
  styleUrls: ['./saver-details.component.scss']
})
export class SaverDetailsComponent implements OnInit {

  savings_id: any;
  Details: any;
  saver: any;
  tenor_type: any;
  schedules: any;

  constructor(private savingsService: SavingsService,
    private route: ActivatedRoute) { 
      this.route.paramMap.subscribe(params => {
        this.savings_id = params.get("id");
      });
    }
  ngOnInit() {
    this.savingsDetails(this.savings_id);
  }

  savingsDetails(id) {
    this.savingsService.getSavingsDetails(id).subscribe((res: any) => {
      this.Details = res.data;
      this.saver = res.data.user;
      this.tenor_type = res.data.tenor_type;
      this.schedules = res.data.schedule;
    });
  }

}
