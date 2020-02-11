import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor(private http: HttpClient) { }

  getTeamMembers(){
    return this.http.get(Endpoint.TEAM);
  }

  getTeamRoles(){
    return this.http.get(`${Endpoint.TEAM}/roles`);
  }

  sendInvite(data){
    return this.http.post(Endpoint.TEAM, data);
  }

  updateProfile(token, data){
    return this.http.post(`${Endpoint.ADMIN_ACTIVATE}?token=${token}`, (data));
  }

  activateAdmin(id) {
    return this.http.put(`${Endpoint.TEAM}/enable/${id}`, JSON.stringify(id));
  }

  deactivateAdmin(id) {
    return this.http.put(`${Endpoint.TEAM}/disable/${id}`, JSON.stringify(id));
  }

}
