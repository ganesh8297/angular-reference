import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(user: any, searchValue: string) {
    if (!user || !searchValue) {
      return user;
    }
    // return user.filter((data: any) => (data.status).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    searchValue = searchValue.toLocaleLowerCase();
    return user.filter((data: any) => { 
      return JSON.stringify(data).toLocaleLowerCase().includes(searchValue);
    })
  }

}
