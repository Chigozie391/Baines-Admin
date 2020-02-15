import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { ActivatedRoute } from "@angular/router";
import { Constant } from 'src/app/utils/constant';
import { BorrowersService } from 'src/app/service/borrowers/borrowers.service';
import { SaversService } from 'src/app/service/savers/savers.service';
import {Location} from '@angular/common';
import { LoanPurposePipe } from 'src/app/filterPipes/byLoanPurpose/loan-purpose-pipe.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationModel } from 'src/app/model/pagination.model';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [LoanPurposePipe]
})
export class UserDetailsComponent implements OnInit {
  currentPage: any = 0;
  currentPage2: any = 0;
  currentPage3: any = 0;
  paginationModel = new PaginationModel();
  pageSettings: any;
  pager: any = {};

  id: any;
  userDetails: any;
  userSavings: any;

  borrowerLoans: any;
  loan_details: any;
  tenor_type: any;
  loan_profile: any;
  moreProfile: any;
  totalSavings: any;
  banks: any;
  cards: any;
  term: any;
  config: any;

  constructor(private userService: UsersService,
    private borrowersService: BorrowersService,
    private saverService: SaversService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private location: Location,
    private paginationService: PaginationService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });

    this.details(this.currentPage);

    this.userService.getUser(this.id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.userDetails = res.data.user;
        this.moreProfile = res.data.loan_profile;
      }
      console.log(res.data);
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });




    this.savingsDetails(this.currentPage2);


    this.userService.getUserBankingInfo(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.banks = res.data.banks;
        this.cards = res.data.cards;
      }
    });



  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  back(){
    this.location.back();
  }  

  savingsDetails = (currentPage2?) => {
    if (currentPage2) this.currentPage2 = currentPage2;
    this.paginationModel.page = currentPage2;
    this.saverService.getUserSavings(this.id, this.paginationModel).subscribe((res: any) => {
      console.log(res);
      if(res.status === Constant.SUCCESS) {
        this.userSavings = res.data.plans;
        this.totalSavings = res.data.total_balance;


        this.pageSettings = res.data.page_info;
        this.pager = this.paginationService.setPage(
          this.pageSettings.total_pages,
          this.pageSettings.page,
          this.pageSettings.limit
        );
      }
      console.log(res.data);
    });
  }

  details = (currentPage?) => {
    if (currentPage) this.currentPage = currentPage;
    this.paginationModel.page = currentPage;
    this.borrowersService.getLoans(this.id, this.paginationModel).subscribe((res: any) => {
      console.log(res);
      if(res.status === Constant.SUCCESS) {
        this.borrowerLoans = res.data;
        this.loan_details = res.data.loans;
        this.tenor_type = res.data.loans.tenor_type;
        this.loan_profile = res.data.loans.loan_profile;

        this.pageSettings = res.data.page_info;
        this.pager = this.paginationService.setPage(
          this.pageSettings.total_pages,
          this.pageSettings.page,
          this.pageSettings.limit
        );
      }
      // console.log(res.data);
    });
  }

  setNewPage(page) {
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.details);
  }

  setNewPage2(page) {
    this.paginationService.setNewCurrentPage(page, this.currentPage2, this.savingsDetails);
  }

  // setNewPage3(page) {
  //   this.paginationService.setNewCurrentPage(page, this.currentPage3, this.details);
  // }

}
