import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeofPipe'
})
export class TypeofPipe implements PipeTransform {

  transform(value: any) {
    return typeof value;
  }

}
