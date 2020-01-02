import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions/transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transaction: any;
  stat: any;
  total: any;

  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.allTransactions();
    this.transactionStats();
  }

  allTransactions() {
    this.transactionService.getAllTransactions().subscribe((res: any) => {
      this.transaction = res.data;
    });
  }

  transactionStats() {
    this.transactionService.transactionStats().subscribe((res: any) => {
      this.stat = res.data;
      this.total = (res.data.success + res.data.failed + res.data.reversed);
    });
  }

}
