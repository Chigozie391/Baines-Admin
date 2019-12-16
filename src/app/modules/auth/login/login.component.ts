import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Constant } from 'src/app/utils/constant';
import { Router } from '@angular/router';
import { Path } from 'src/app/utils/path';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new LoginModel();
  msg: string;
  showAlert: string;
  loading: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  // Login functions
  // Stores user details and access token when login is successful
  loginUser() {
    this.msg = '';
    this.loading = true;
    this.authService.login(this.login).subscribe((res: any) => {
      
      if (res.status === Constant.SUCCESS) {
        this.authService.token = res.data.access_token;
        this.authService.user = JSON.stringify(res.data.user);
        this.authService.profile_token = res.data.profile_token;
        this.router.navigate([Path.DASHBOARD]);
      }
      else {
        this.loading = false;
        this.showAlert = Constant.SHOW_ERROR;
        this.msg = res.message;
      }
    }, err => {
      this.loading = false;
      this.showAlert = Constant.SHOW_ERROR;
        this.msg = err.error.message;
    })
  }

  onClosed() {
    this.msg = '';
  }
}
