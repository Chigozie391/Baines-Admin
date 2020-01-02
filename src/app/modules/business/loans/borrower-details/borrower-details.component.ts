import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      this.loan_id = params.get("id");
    });
  }

  ngOnInit() {
    this.loanDetails(this.loan_id);
  }

  loanDetails(id) {
    this.loansService.getLoanDetails(id).subscribe((res: any) => {
      this.Details = res.data;
      this.borrower = res.data.user;
      this.tenor_type = res.data.tenor_type;
      this.loan_schedule = res.data.schedule;
      this.moreProfile = res.data.loan_profile;
      console.log(res.data);
    })
  }

}
