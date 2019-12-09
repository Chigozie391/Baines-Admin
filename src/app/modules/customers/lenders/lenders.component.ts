import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LendersService } from 'src/app/service/lenders/lenders.service';
import { Constant } from 'src/app/utils/constant';
import { PaginationService } from 'src/app/service/pagination/pagination.service';
import { Path } from 'src/app/utils/path';

@Component({
  selector: 'app-lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.scss']
})
export class LendersComponent implements OnInit {

  list: any;
  loading: boolean;

  //Pagination variables
  currentPage: any;
  pager: any = {};
  pageSettings: any;


  constructor(private router: Router, private lendersService: LendersService, private paginationService: PaginationService) { }

  ngOnInit() {
    this.allLenders();
  }
  

  viewDetails(item) {
    this.router.navigate([Path.LENDER_VIEW],{state: {data: item}});
  }

  allLenders() {
    this.loading = true;
    this.lendersService.getAllLenders().subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.list = res.data.profiles;
        this.pageSettings = res.data.page_info;
        this.setPage(this.pageSettings.number);
      }
      else{

      }
    }, (err) => {
      this.loading = false;
      console.log(err);
    })
  }

  setPage(page: number) {

    this.pager = this.paginationService.getPager(this.pageSettings.totalElements, page, this.pageSettings.size);
  }
  
  // setNewPage(page) {
  //   if (page === this.transactionSettings.page) {
  //     return;
  //   }
  //   this.currentPage = page;
  //   this.allLenders()
  // }

}
