import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationModel } from 'src/app/model/pagination.model';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  currentPage: any = 0;
  paginationModel = new PaginationModel();
  pageSettings: any;
  pager: any = {};

  loans: any;
  loanDetail: any;
  loan_id: any;
  stat: any;
  config: any;


  constructor(private loansService: LoansService,
    private authService: AuthService,
    private paginationService: PaginationService) { }

  ngOnInit() {
    this.allLoans(this.currentPage);
    this.loansStat();
  }

  allLoans = (currentPage) => {
    if (currentPage) this.currentPage = currentPage;
    console.log(currentPage);
    this.paginationModel.page = currentPage;
    console.log(this.paginationModel);
    this.loansService.getAllLoans(this.paginationModel).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.loans = res.data.loans;
        console.log(res);
        this.pageSettings = res.data.page_info;
        this.pager = this.paginationService.setPage(
          this.pageSettings.total_pages,
          this.pageSettings.page,
          this.pageSettings.limit
        );

      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  setNewPage(page) {
    console.log(page);
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.allLoans);
  }

  loansStat(){
    this.loansService.getLoanStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stat = res.data.loan_performance;
      }
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }



}
