import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: any;
  stats: any;
  id: any;
  msg: any;

  constructor(private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
    this.users();
    this.usersStats();
  }

  users() {
    this.userService.getAllUsers().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.user = res.data;
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  usersStats() {
    this.userService.getUsersStats().subscribe((res: any) => {
      this.stats = res.data;
    });
  }

  activate(id) {
    this.msg = 'Activating...'
    this.userService.activateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res;
        this.users();
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err;
      }
    });
  }

  deactivate(id) {
    this.msg = 'Deactivating...'
    this.userService.deactivateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res;
        this.users();
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err;
      }
    });
  }

  onClosed() {
    this.msg = '';
  }

}
