import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans: any;
  loanDetail: any;
  loan_id: any;

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.allLoans();
  }

  allLoans() {
    this.loansService.getAllLoans().subscribe((res: any) => {
      this.loans = res.data;
    });
  }



}
