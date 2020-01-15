import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { BorrowersService } from '../../../service/borrowers/borrowers.service';
import { Path } from 'src/app/utils/path';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.scss']
})
export class BorrowersComponent implements OnInit {
  msg: any;
  list: any;
  config: any;


  constructor(private router: Router, 
    private borrowersService: BorrowersService,
    private authService: AuthService,
    private userService: UsersService) { }

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
    this.borrowersService.getAllBorrowers().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.list = res.data;
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }


  activate(id) {
    this.msg = 'Activating...'
    this.userService.activateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.allBorrowers();
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err.error.message;
      }
    });
  }


  deactivate(id) {
    this.msg = 'Deactivating...'
    this.userService.deactivateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.allBorrowers();
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err.error.message;
      }
    });
  }

  onClosed() {
    this.msg = '';
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
