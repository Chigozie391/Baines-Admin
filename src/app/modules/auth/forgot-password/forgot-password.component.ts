import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Constant } from 'src/app/utils/constant';
import { ForgotPasswordModel } from './forgot-password.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  passwordReset = new ForgotPasswordModel();
  loading: boolean;
  msg: string;
  showAlert: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.msg = '';
    this.loading = true;
    this.authService.forgotPasword(this.passwordReset).subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.showAlert = Constant.SHOW_SUCCESS;
        this.msg = res.message;
      }
      else {
        this.showAlert = Constant.SHOW_ERROR;
        this.msg = res.message;
      }
    }, err => {
      this.loading = false;
      this.showAlert = Constant.SHOW_ERROR;
      this.msg = err.error.message;
    })
  }

}
