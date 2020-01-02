import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

    getAllTransactions() {
      return this.http.get(Endpoint.GET_ALL_TRANSACTIONS);
    }

    transactionStats() {
      return this.http.get(`${Endpoint.GET_ALL_TRANSACTIONS}/stats`);      
    }

    getTransDetails(id) {
      return this.http.get(`${Endpoint.GET_ALL_TRANSACTIONS}/${id}`);
    }
  
  }
