import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanPurpose'
})
export class LoanPurposePipe implements PipeTransform {

  transform(loan_details: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) { 
      return loan_details; 
    } else {
    // check if search term exists
    return loan_details.filter(function(loan: any) {
      return loan.id.toLowerCase().includes(term.toLowerCase());
    });
    }
  }

}
