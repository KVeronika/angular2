import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    if (typeof value !== 'string') {
      throw new Error('ReversePipe: Argument is not a string');
      
    }
    let newStr = '';

    for (let i = value.length - 1; i >=0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
