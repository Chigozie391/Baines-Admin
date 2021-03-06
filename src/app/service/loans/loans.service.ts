import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getAllLoans(data) {
    let page = data.page ? `page=${data.page}` : '';
    return this.http.get(`${Endpoint.LOANS}?${page}`);
  }

  getLoanDetails(id) {
    return this.http.get(`${Endpoint.LOANS}/${id}?profile=true&schedule=true&transaction=true`);
  }

  getLoanStats(){
    return this.http.get(Endpoint.LOANS_STATS);
  }

  getWalletBalance(){
    return this.http.get(`${Endpoint.REPORTS}/wallet-balance`);
  }
}
