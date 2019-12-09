import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { BorrowersService } from '../../../service/borrowers/borrowers.service';
import { Path } from 'src/app/utils/path';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.scss']
})
export class BorrowersComponent implements OnInit {
  loading: boolean;
  list: any

  constructor(private router: Router, private borrowersService: BorrowersService) { }

  ngOnInit() {
    this.allBorrowers();
  }

  // viewDetails() {
  //   this.router.navigate(['/app/customers/borrowers/view']);
  // }

  viewDetails(item) {
    this.router.navigate([Path.BORROWERS_VIEW],{state: {data: item}});
  }


  allBorrowers() {
    this.loading = true;
    this.borrowersService.getAllBorrowers().subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.list = res.data.profiles;
      }
      else{

      }
    }, (err) => {
      this.loading = false;
      console.log(err);
    })
  }
}
