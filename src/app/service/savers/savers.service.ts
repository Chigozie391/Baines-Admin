import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SaversService {

  constructor(private http: HttpClient) { }

  getAllSavers() {
    return this.http.get(Endpoint.GET_ALL_SAVERS);
  }

  getUserSavings(user_id, data) {
    let page = data.page ? `page=${data.page}` : '';
    return this.http.get(`${Endpoint.USER}/${user_id}/saving-plans?${page}`);
  }

  getSavingsDetails(savings_id) {
    return this.http.get(`${Endpoint.SAVINGS}/${savings_id}?profile=true&schedules=true&transaction=true`);
  }
}
