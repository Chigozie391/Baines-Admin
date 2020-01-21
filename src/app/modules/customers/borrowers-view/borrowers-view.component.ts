import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Path } from 'src/app/utils/path';
import { CollectionsService } from 'src/app/service/collections/collections.service';
import { CollectionsModel } from '../../../model/collections.model';
import { Constant } from 'src/app/utils/constant';
import { BankService } from 'src/app/service/bank/bank.service';
import { UsersService } from 'src/app/service/users/users.service';
import { BorrowersService } from 'src/app/service/borrowers/borrowers.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-borrowers-view',
  templateUrl: './borrowers-view.component.html',
  styleUrls: ['./borrowers-view.component.scss']
})
export class BorrowersViewComponent implements OnInit {
  borrowers: any;
  borrowersName: any;
  collection: CollectionsModel = new CollectionsModel();
  loading: boolean;
  list: any;
  loadingBankDetails: boolean;
  id: any;
  borrower: any;
  borrowerLoans: any;
  loan_details: any;
  tenor_type: any;
  loan_profile: any;
  banks: any;
  cards: any;
  moreProfile: any;

  constructor(private router: Router, 
    private collectionsService: CollectionsService, 
    private bankService: BankService,
    private userService: UsersService,
    private borrowersService: BorrowersService,
    private authService: AuthService,
    private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.borrowerDetails();
  }

  borrowerDetails() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
  
    this.userService.getUser(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.borrower = res.data.user;
        this.moreProfile = res.data.loan_profile;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    }); 
    
    this.borrowersService.getLoans(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.borrowerLoans = res.data;
        this.loan_details = res.data.loans;
        this.tenor_type = res.data.loans.tenor_type;
        this.loan_profile = res.data.loans.loan_profile;
      }
    });

    this.userService.getUserBankingInfo(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.banks = res.data.banks;
        this.cards = res.data.cards;

      }
    });


  
    // this.userService.getUser(this.id).subscribe((res: any) => {
    //   if (res.status === Constant.SUCCESS) {
    //     this.userDetails = res.data;
    //   }
    // });
  }




  getBorrowersState() {
    this.borrowers = history.state.data;
    // console.log(this.borrowers)
    // if (!this.borrowers) {
    //   this.router.navigate([Path.BORROWERS]);
    //   return
    // }
    // else {
    //   this.showName();
    //   this.collection.borrower_id = this.borrowers.user_id;
    //   this.getCollectionsForSpecificBorrower();
    //   this.getBankDetails();
    // }
  }

  showName() {
    !this.borrowers.user.last_name && this.borrowers.user.first_name ?
      this.borrowersName = this.borrowers.user.business_name :
      this.borrowersName = `${this.borrowers.user.last_name} ${this.borrowers.user.first_name}`;
  }

  getCollectionsForSpecificBorrower(){
    this.loading = true;
    this.collectionsService.getCollections(this.collection).subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.list = res.data.collections;
      }
    }, err => {
      this.loading = false;
      console.log(err)
    })
  }

  getBankDetails() {
    this.loadingBankDetails = true;
    this.bankService.specificUserBank(this.borrowers.user_id).subscribe()
  }

}
