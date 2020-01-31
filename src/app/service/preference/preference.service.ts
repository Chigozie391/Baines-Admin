import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private http: HttpClient) { }

  getWhatsAppPreferences(){
    return this.http.get(`${Endpoint.PREFERENCE}?type=whatsapp_number`);
  }

  updateWhatsApp(data){
    return this.http.put(`${Endpoint.PREFERENCE}/1`, data);
  }
}
