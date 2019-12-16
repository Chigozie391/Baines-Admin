import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class LendersService {

  constructor(private http: HttpClient) { }
  
  getAllLenders() {
    return this.http.get(Endpoint.GET_ALL_LENDERS);
  }

  getBorrowersFromALender(id) {
    return this.http.get(`${Endpoint.PROFILES}/${id}/borrowers`)
  }

}
