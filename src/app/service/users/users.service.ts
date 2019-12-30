import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  getAllUsers() {
    return this.http.get(Endpoint.GET_ALL_USERS);
  }

  getUser(user_id) {
    return this.http.get(`${Endpoint.USER}/${user_id}`);
  }

  getUserBankingInfo(user_id) {
    return this.http.get(`${Endpoint.USER}/${user_id}/bank-info?card=true`);
  }

  // getBorrowersFromALender(id) {
  //   return this.http.get(`${Endpoint.PROFILES}/${id}/borrowers`)
  // }

}
