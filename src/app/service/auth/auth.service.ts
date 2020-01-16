import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/modules/auth/login/login.model';
import { Endpoint } from 'src/app/utils/endpoint';
import { Constant } from 'src/app/utils/constant';
import { ForgotPasswordModel } from 'src/app/modules/auth/forgot-password/forgot-password.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Path } from 'src/app/utils/path';
import { AccountModel } from 'src/app/modules/settings/account/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { 
    
  }

  get token() {
    return localStorage.getItem(Constant.ACCESS_TOKEN);
  }

  get profile_token() {
    return localStorage.getItem(Constant.PROFILE_TOKEN);
  }

  get user() {
    return JSON.parse(localStorage.getItem(Constant.CURRENT_USERS));
  }

  set token(item) {
    localStorage.setItem(Constant.ACCESS_TOKEN, item);
  }

  set profile_token(item) {
    localStorage.setItem(Constant.PROFILE_TOKEN, item);
  }

  set user(item) {
    localStorage.setItem(Constant.CURRENT_USERS, item);
  }

  login(credential: LoginModel) {
    return this.http.post(Endpoint.ADMIN_LOGIN, credential);
  }

  forgotPasword(credential: ForgotPasswordModel) {
    return this.http.post(Endpoint.FORGOT_PASSWORD, credential);
  }

  changePassword(credential: AccountModel){
    return this.http.post(Endpoint.CHANGE_PASSWORD, credential);
  }

  uploadImage(image){
    return this.http.post(Endpoint.UPLOAD_IMAGE, image);
  }

  // logout() {
  //   return this.http.post('delete', `${Endpoint.ADMIN_LOGOUT}`)
  //     .pipe(
  //      map((res: any)=> {
  //         if(res.status === Constant.SUCCESS){
  //           localStorage.clear();
  //           this.router.navigate([Path.LOGIN])
  //           return;
  //         }
  //        }
  //      )
  //     );
  // }

  logout(){
    localStorage.clear();
    this.router.navigate([Path.LOGIN])
    return;
  }
}
