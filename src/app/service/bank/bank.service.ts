import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { 
    
  }

  specificUserBank (id) {
    return this.http.get(`${Endpoint.USERS}/${id}/bank`)
  } 
}
