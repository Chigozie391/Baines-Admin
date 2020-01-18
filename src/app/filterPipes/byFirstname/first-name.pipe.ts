import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FirstNamePipe implements PipeTransform {

  transform(user: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) { 
      return user; 
    } else {
    // check if search term exists
    return user.filter(function(each: any) {
      return each.full_name.toLowerCase().includes(term.toLowerCase());
    });
    }
  }

}
