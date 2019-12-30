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

  constructor(private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
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

}
