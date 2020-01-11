import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-borrower-details',
  templateUrl: './borrower-details.component.html',
  styleUrls: ['./borrower-details.component.scss']
})
export class BorrowerDetailsComponent implements OnInit {

  loans: any;
  borrowerLoans: any;
  loan_id: any;
  loan_details: any;
  tenor_type: any;
  borrower: any;
  moreProfile: any;
  loan_schedule: any;
  Details: any;
  
  constructor(private loansService: LoansService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _location: Location) { 
    this.route.paramMap.subscribe(params => {
      this.loan_id = params.get("id");
    });
  }

  ngOnInit() {
    this.loanDetails(this.loan_id);
  }

  loanDetails(id) {
    this.loansService.getLoanDetails(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.Details = res.data;
        this.borrower = res.data.user;
        this.tenor_type = res.data.tenor_type;
        this.loan_schedule = res.data.schedule;
        this.moreProfile = res.data.loan_profile;      
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  backClicked() {
    this._location.back();
  }

}
