import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans: any;
  loanDetail: any;
  loan_id: any;
  stat: any;

  constructor(private loansService: LoansService,
    private authService: AuthService) { }

  ngOnInit() {
    this.allLoans();
    this.loansStat();
  }

  allLoans() {
    this.loansService.getAllLoans().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.loans = res.data;
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  loansStat(){
    this.loansService.getLoanStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stat = res.data;
      }
    });
  }



}
