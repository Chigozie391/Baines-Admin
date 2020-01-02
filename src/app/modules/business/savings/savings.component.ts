import { Component, OnInit } from '@angular/core';
import { SavingsService } from 'src/app/service/savings/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  savings: any;

  constructor(private savingsService: SavingsService) { }

  ngOnInit() {
    this.allSavings();
  }

  allSavings() {
    this.savingsService.getAllSavings().subscribe((res: any) => {
      this.savings = res.data;
    });
  }

}
