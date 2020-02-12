import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions/transactions.service';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationModel } from 'src/app/model/pagination.model';
import { Constant } from 'src/app/utils/constant';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [InnerLastNamePipe]
})
export class TransactionComponent implements OnInit {

  currentPage: any = 1;
  paginationModel = new PaginationModel();
  pageSettings: any;
  pager: any = {};

  transaction: any;
  stat: any;
  total: any;
  pageActual : number = 1;

  config: any;

  constructor(
    private transactionService: TransactionsService,
    private authService: AuthService,
    private paginationService: PaginationService) { 

  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.allTransactions(this.currentPage);
    this.transactionStats();
  }

  allTransactions = (currentPage?) => {
    if (currentPage) this.currentPage = currentPage;
    this.paginationModel.page = this.currentPage;
    this.transactionService.getAllTransactions(this.paginationModel).subscribe((res: any) => {
      console.log(res);
      if(res.status === Constant.SUCCESS){
        this.transaction = res.data.transactions;
        this.pageSettings = res.data.page_info;
        this.pager = this.paginationService.setPage(
          this.pageSettings.total_pages,
          this.pageSettings.page,
          this.pageSettings.limit
        );
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  setNewPage(page) {
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.allTransactions);
  }

  transactionStats() {
    this.transactionService.transactionStats().subscribe((res: any) => {
      this.stat = res.data;
      this.total = (res.data.success + res.data.failed + res.data.reversed);
    });
  }

}
