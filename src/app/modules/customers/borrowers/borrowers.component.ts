import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.scss']
})
export class BorrowersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetails() {
    this.router.navigate(['/app/customers/borrowers/view']);
  }
}
