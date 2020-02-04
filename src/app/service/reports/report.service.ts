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

  userOnboarding(){
    return this.http.get(`${Endpoint.REPORTS}/user-onboarding`);
  }

  reportDescription(){
    return this.http.get(Endpoint.REPORTS);
  }

  userGraph(){
    return this.http.get(`${Endpoint.REPORTS}/user-by-month`);
  }

  loansGraph(){
    return this.http.get(`${Endpoint.REPORTS}/loan-by-month`);
  }

  loansByMonthGraph(){
    return this.http.get(`${Endpoint.REPORTS}/running-vs-settled-loan-by-month`);
  }

  savingsGraph(){
    return this.http.get(`${Endpoint.REPORTS}/saving-by-month`);
  }

  savingsByMonthGraph(){
    return this.http.get(`${Endpoint.REPORTS}/running-vs-matured-saving-by-month`);
  }

}
