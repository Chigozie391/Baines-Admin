import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions/transactions.service';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [InnerLastNamePipe]
})
export class TransactionComponent implements OnInit {

  transaction: any;
  stat: any;
  total: any;
  pageActual : number = 1;

  config: any;

  constructor(
    private transactionService: TransactionsService,
    private authService: AuthService) { 

  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.allTransactions();
    this.transactionStats();
  }

  allTransactions() {
    this.transactionService.getAllTransactions().subscribe((res: any) => {
      this.transaction = res.data;
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }

  transactionStats() {
    this.transactionService.transactionStats().subscribe((res: any) => {
      this.stat = res.data;
      this.total = (res.data.success + res.data.failed + res.data.reversed);
    });
  }

}
