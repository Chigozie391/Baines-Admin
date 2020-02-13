import { Component, OnInit } from '@angular/core';
import { SavingsService } from 'src/app/service/savings/savings.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationModel } from 'src/app/model/pagination.model';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  currentPage: any = 0;
  paginationModel = new PaginationModel();
  pageSettings: any;
  pager: any = {};

  savings: any;
  stat: any;

  constructor(
    private savingsService: SavingsService,
    private authService: AuthService,
    private paginationService: PaginationService
    ) { }

  ngOnInit() {
    this.allSavings(this.currentPage);
    this.savingsStat();
  }

  allSavings = (currentPage) => {
    if (currentPage) this.currentPage = currentPage;
    this.paginationModel.page = currentPage;
    this.savingsService.getAllSavings(this.paginationModel).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.savings = res.data.plans;
        console.log(res);
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
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.allSavings);
  }

  savingsStat(){
    this.savingsService.getSavingStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stat = res.data;
      }
    });
  }

}
