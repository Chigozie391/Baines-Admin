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
}
