import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class BorrowersService {

  constructor(private http: HttpClient) { }

  getAllBorrowers() {
    return this.http.get(Endpoint.GET_ALL_BORROWERS);
  }
}
