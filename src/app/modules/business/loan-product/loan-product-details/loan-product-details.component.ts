import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-product-details',
  templateUrl: './loan-product-details.component.html',
  styleUrls: ['./loan-product-details.component.scss']
})
export class LoanProductDetailsComponent implements OnInit {

  details: Boolean;
  borrowers: Boolean;

  constructor() { 
    this.details = true;
    this.borrowers = false;
  }

  checkDetails() {
    this.details = true;
    this.borrowers = false
    console.table(this.details, this.borrowers);
  }

  checkBorrowers() {
    this.details = false;
    this.borrowers = true;
    console.table(this.details, this.borrowers);
  }

  ngOnInit() {

  }

}
