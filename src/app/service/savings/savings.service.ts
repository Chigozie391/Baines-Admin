import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  constructor(private http: HttpClient) { }

  getAllSavings(data) {
    let page = data.page ? `page=${data.page}` : '';
    return this.http.get(`${Endpoint.SAVINGS}?${page}`);
  }

  getSavingsDetails(id) {
    return this.http.get(`${Endpoint.SAVINGS}/${id}?profile=true&schedules=true&transaction=true`);
  }

  getSavingStats(){
    return this.http.get(Endpoint.SAVINGS_STATS);
  }
}
