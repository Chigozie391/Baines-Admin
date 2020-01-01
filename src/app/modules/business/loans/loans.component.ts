import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans: any;

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.allLoans();
  }

  allLoans() {
    this.loansService.getAllLoans().subscribe((res: any) => {
      console.log(res.data);
      this.loans = res.data;
    });
  }

}
