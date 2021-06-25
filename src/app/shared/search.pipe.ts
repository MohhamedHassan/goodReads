import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books:any,value:string): any {
      if(!value) return books
      return books.filter((item:any) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
  }

}
