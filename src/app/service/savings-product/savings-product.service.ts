import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utils/endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingsProductService {

  constructor(private http: HttpClient) { }

  getSavingsProduct(){
    return this.http.get(`${Endpoint.GET_PRODUCT}?type=saving`)
  }

  getProductDetails(id){
    return this.http.get(`${Endpoint.GET_PRODUCT}/${id}`)
  }

  getTenor() {
    return this.http.get(`${Endpoint.GET_PRODUCT}/tenor-types`)
  }

  getRepaymentMethods(){
    return this.http.get(`${Endpoint.GET_PRODUCT}/repayment-methods`)
  }

  createSavingsProduct(data){
    return this.http.post(Endpoint.GET_PRODUCT, data);
  }

}
