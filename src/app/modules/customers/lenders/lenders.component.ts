import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.scss']
})
export class LendersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetails() {
    this.router.navigate(['/app/customers/lenders/view']);
  }

}
