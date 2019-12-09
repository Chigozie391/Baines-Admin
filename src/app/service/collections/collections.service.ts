import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utils/endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }

  getCollections(data){

    let page = data.page ? `page=${data.page}` : '';
    let limit = data.limit ? `&limit=${data.limit}` : '';
    let lender_id = data.lender_id ? `&lender_id=${data.lender_id}` : '';
    let product_id = data.product_id ? `&product_id=${data.product_id}` : '';
    let loan_status = data.loan_status ? `&loan_status=${data.loan_status}` : '';
    let tenor = data.tenor ? `&tenor=${data.tenor}` : '';
    let borrower_id = data.borrower_id ? `&borrower_id=${data.borrower_id}` : '';
    let borrower_name = data.borrower_name ? `&borrower_name=${data.borrower_name}` : '';
    let lender_name = data.lender_name ? `&lender_name=${data.lender_name}` : '';
    let num_of_collections = data.num_of_collections ? `&num_of_collections=${data.num_of_collections}` : '';
    let collection_frequency = data.collection_frequency ? `&collection_frequency=${data.collection_frequency}` : '';

    return this.http.get(`${Endpoint.COLLECTIONS}?${page}${limit}${lender_id}${product_id}${loan_status}${tenor}${borrower_id}${borrower_name}${lender_name}${num_of_collections}${collection_frequency}`)

  }
}
