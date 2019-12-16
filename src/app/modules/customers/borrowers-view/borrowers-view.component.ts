import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/utils/path';
import { CollectionsService } from 'src/app/service/collections/collections.service';
import { CollectionsModel } from '../../../model/collections.model';
import { Constant } from 'src/app/utils/constant';
import { BankService } from 'src/app/service/bank/bank.service';

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

  constructor(private router: Router, private collectionsService: CollectionsService, private bankService: BankService) { 

  }

  ngOnInit() {
    this.getBorrowersState();
  }

  getBorrowersState() {
    this.borrowers = history.state.data;
    console.log(this.borrowers)
    if (!this.borrowers) {
      this.router.navigate([Path.BORROWERS]);
      return
    }
    else {
      this.showName();
      this.collection.borrower_id = this.borrowers.user_id;
      this.getCollectionsForSpecificBorrower();
      this.getBankDetails();
    }
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
