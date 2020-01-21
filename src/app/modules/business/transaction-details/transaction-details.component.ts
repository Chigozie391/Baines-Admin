import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/service/transactions/transactions.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  trans_id: any;
  trans_details: any;

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionsService,
    private authService: AuthService) { 
      this.route.paramMap.subscribe(params => {
        this.trans_id = params.get("id");
      });
    }

  ngOnInit() {
    this.transDetails(this.trans_id);
  }

    transDetails(id) {
      this.transactionService.getTransDetails(id).subscribe((res: any) => {
        this.trans_details = res.data;
      }, (err) => {
        if(err.status === 401){
          // this.msg = `${err.error.message} - Please logout to begin a new session`;
          this.authService.logout();
        }
      });
    }

}
