import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  transform(user: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) { 
      return user; 
    } else {
    // check if search term exists
    return user.filter(function(each: any) {
      return each.first_name.toLowerCase().includes(term.toLowerCase());
    });
    }
  }


//   transform(value: any, input: string) {
//     if (input) {
//         input = input.toLowerCase();
//         return value.filter(function (el: any) {
//             return el.toLowerCase().indexOf(input) > -1;
//         })
//     }
//     return value;
// }



  // transform(all_users: any, term: any) {
  //     if (input) {
  //         input = input.toLowerCase();
  //         return value.filter(function (el: any) {
  //             return el.toLowerCase().indexOf(input) > -1;
  //         })
  //     }
  //     return value;
  // }


}
