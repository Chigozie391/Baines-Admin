import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getAllSavings() {
    return this.http.get(Endpoint.SAVINGS);
  }
}
