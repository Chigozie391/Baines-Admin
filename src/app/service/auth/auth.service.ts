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
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  imgUpdate = new BehaviorSubject<any>({});
  telecast = this.imgUpdate.asObservable();


  constructor(private http: HttpClient, private router: Router) { 
    
  }

  editPicture(newImage) {
    this.imgUpdate.next(newImage);
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

  set image(item) {
    localStorage.setItem(Constant.IMAGE_URL, item);
  }

  get image() {
    return JSON.parse(localStorage.getItem(Constant.IMAGE_URL));
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

  updateAdminProfile(data){
    return this.http.put(Endpoint.TEAM, data);
  }

  logoutRoute() {
    return this.http.post(`${Endpoint.ADMIN_LOGOUT}`, {});
  }

  logout(){
    localStorage.clear();
    this.router.navigate([Path.LOGIN])
    return;
  }
}
