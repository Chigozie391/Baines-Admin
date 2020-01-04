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

  getUsersStats() {
    return this.http.get(Endpoint.USERS_STATS);
  }

  activateUser(user_id){
    return this.http.put(`${Endpoint.USER}/${user_id}/activate`, JSON.stringify(user_id));
  }

  deactivateUser(user_id) {
    return this.http.put(`${Endpoint.USER}/${user_id}/deactivate`, JSON.stringify(user_id));
  }
}
