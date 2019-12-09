import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utils/endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {

  constructor(private http: HttpClient) { }


  loanProduct(data){
    console.log(data)
    let page = data.page ? `page=${data.page}` : '';
    let limit = data.limit ? `&limit=${data.limit}` : '';
    let product_name = data.product_name ? `&product_name=${data.product_name}` : '';
    let product_description = data.product_description ? `&product_description=${data.product_description}` : '';
    let repayment_model = data.repayment_model ? `&repayment_model=${data.repayment_model}` : '';
    let min_loan_amount = data.min_loan_amount ? `&min_loan_amount=${data.min_loan_amount}` : '';
    let max_loan_amount = data.max_loan_amount ? `&max_loan_amount=${data.max_loan_amount}` : '';
    let tenor_type = data.tenor_type ? `&tenor_type=${data.tenor_type}` : '';
    let interest = data.interest ? `&interest=${data.interest}` : '';
    let profile_id = data.profile_id ? `&profile_id=${data.profile_id}` : '';
    
    return this.http.get(`${Endpoint.LOAN_PRODUCT}?${page}${limit}${product_name}${product_description}${repayment_model}${min_loan_amount}${max_loan_amount}${tenor_type}${interest}${profile_id}`);
  }
}
