import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/modules/auth/login/login.model';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }

  login(credential: LoginModel) {
    return this.http.post(Endpoint.LOGIN, credential);
  }
}
