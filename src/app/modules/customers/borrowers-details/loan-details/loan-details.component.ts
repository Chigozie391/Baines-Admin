import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  id: any;
  Details: any;

  constructor(private loansService: LoansService,
    private route: ActivatedRoute,
    private authService: AuthService
    ) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  }

  ngOnInit() {
    this.loanDetails();
  }

  loanDetails() {
    this.loansService.getLoanDetails(this.id).subscribe((res: any) => {
    this.Details = res.data;
    }, (err) => {
    if(err.status === 401){
      // this.msg = `${err.error.message} - Please logout to begin a new session`;
      this.authService.logout();
    }
    });
  }

}
