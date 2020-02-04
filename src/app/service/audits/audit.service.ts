import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endpoint } from 'src/app/utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAuditLogs(page_id) {
    return this.http.get(`${Endpoint.AUDIT_LOGS}?page=${page_id}`);
  }

  getAuditDetails(id){
    return this.http.get(`${Endpoint.AUDIT_LOGS}/${id}`);
  }
}
