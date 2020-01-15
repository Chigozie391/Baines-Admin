import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  matureSavings(){
    return this.http.get(`${Endpoint.REPORTS}/matured-savings`);
  }

  overDueSavings(){
    return this.http.get(`${Endpoint.REPORTS}/loan-overdue`);
  }

  dueSavings(){
    return this.http.get(`${Endpoint.REPORTS}/loan-due`);
  }

  reportDescription(){
    return this.http.get(Endpoint.REPORTS);
  }

}
