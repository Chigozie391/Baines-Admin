import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byId'
})
export class ByIdPipe implements PipeTransform {

  transform(transaction: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) { 
      return transaction; 
    } else {
    // check if search term exists
    return transaction.filter(function(each: any) {
      return each.reference.toLowerCase().includes(term.toLowerCase());
    });
    }
  }

}
