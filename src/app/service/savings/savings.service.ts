import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  constructor(private http: HttpClient) { }

  getAllSavings() {
    return this.http.get(Endpoint.SAVINGS);
  }

  getSavingsDetails(id) {
    return this.http.get(`${Endpoint.SAVINGS}/${id}?profile=true&schedules=true&transaction=true`);
  }

  getSavingStats(){
    return this.http.get(Endpoint.SAVINGS_STATS);
  }
}
