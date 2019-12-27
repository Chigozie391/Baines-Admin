import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BorrowersService {

  constructor(private http: HttpClient,private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.authService.token
    })
  }

  getAllBorrowers() {
    return this.http.get(Endpoint.GET_ALL_BORROWERS);
  }
}
